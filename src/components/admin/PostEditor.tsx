'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import slugify from 'slugify'
import { Save, Plus, Trash2, Image as ImageIcon, ImagePlus, Bold, Italic, Underline, List, ListOrdered, Link as LinkIcon, Heading1, Heading2, Quote, RemoveFormatting } from 'lucide-react'
import { MediaSelectorModal } from './MediaSelectorModal'

// Utilidad para limpiar el slug
const createSlug = (text: string) => {
    return slugify(text, {
        replacement: '-',
        remove: /[*+~.()'"!:@]/g,
        lower: true,
        strict: true,
        locale: 'en',
        trim: true
    })
}

const CATEGORIES = [
    "Reformas",
    "Instalaciones",
    "Energía Fotovoltaica",
    "Trabajos Verticales",
    "Guías"
];

export default function PostEditor({ post, mediaList = [] }: { post?: any, mediaList?: any[] }) {
    const router = useRouter()

    const [formData, setFormData] = useState({
        title: post?.title || '',
        slug: post?.slug || '',
        metaTitle: post?.metaTitle || '',
        metaDescription: post?.metaDescription || '',
        mainImage: post?.mainImage || '',
        contentHtml: post?.contentHtml || '',
        contentText: post?.contentText || '',
        isPublished: post ? post.isPublished : false,
        categories: post?.categories ? JSON.parse(post.categories) : [],
    })

    // Tabs de contenido
    const [activeTab, setActiveTab] = useState<'text' | 'html'>('text')
    const [isSaving, setIsSaving] = useState(false)
    const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    // Calculate initial word count
    useEffect(() => {
        if (formData.contentText) {
            const text = formData.contentText.trim()
            setWordCount(text ? text.split(/\s+/).length : 0)
        }
    }, [])

    const handleWordCount = (text: string) => {
        const trimmed = text.trim()
        setWordCount(trimmed ? trimmed.split(/\s+/).length : 0)
    }

    // FAQs
    const [faqs, setFaqs] = useState<{ id?: string, question: string, answer: string }[]>(
        post?.faqs || []
    )

    // Autogenerar slug al cambiar el titulo si el slug no ha sido modificado  manualmente
    useEffect(() => {
        if (!post && formData.title && !formData.slug) {
            setFormData(prev => ({ ...prev, slug: createSlug(prev.title) }))
        }
    }, [formData.title, formData.slug, post])

    const handleSlugBlur = () => {
        setFormData(prev => ({ ...prev, slug: createSlug(prev.slug || prev.title) }))
    }

    const toggleCategory = (cat: string) => {
        setFormData(prev => {
            const catArr = prev.categories || [];
            if (catArr.includes(cat)) {
                return { ...prev, categories: catArr.filter((c: string) => c !== cat) }
            } else {
                return { ...prev, categories: [...catArr, cat] }
            }
        })
    }

    // Sincronizar texto o html basico de forma rudimentaria o simplemente mantener separados
    // Para un editor avanzado normalmente se usa un WYSIWYG, aquí el usuario pidio: 
    // "Habrá una pestaña que pondra Texto y otra que ponga HTML. Si se escribe en HTML y despues se pasa a la pestaña texto, saldrá el mismo texto pero formateado."
    const onContentChange = (val: string, type: 'html' | 'text') => {
        if (type === 'html') {
            // simple strip html para texto plano como preview
            const textFormat = val.replace(/<[^>]*>?/gm, '')
            setFormData(prev => ({ ...prev, contentHtml: val, contentText: textFormat }))
            handleWordCount(textFormat)
        } else {
            // Convertir nl2br para html basico si editan el texto
            const htmlFormat = val.split('\n').map(p => `<p>${p}</p>`).join('')
            setFormData(prev => ({ ...prev, contentText: val, contentHtml: htmlFormat }))
            handleWordCount(val)
        }
    }

    const execCmd = (cmd: string, val: string = '') => {
        document.execCommand(cmd, false, val);
    }

    const addFaq = () => {
        setFaqs([...faqs, { question: '', answer: '' }])
    }

    const updateFaq = (index: number, key: 'question' | 'answer', value: string) => {
        const newFaqs = [...faqs]
        newFaqs[index][key] = value
        setFaqs(newFaqs)
    }

    const removeFaq = (index: number) => {
        const newFaqs = [...faqs]
        newFaqs.splice(index, 1)
        setFaqs(newFaqs)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSaving(true)

        // Llamada simulada a la API que se va a encargar de guardar
        try {
            const payload = {
                ...formData,
                categories: JSON.stringify(formData.categories),
                faqs,
                id: post?.id
            };

            const res = await fetch('/api/admin/blog', {
                method: post ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })

            if (res.ok) {
                router.push('/admin/blog')
                router.refresh()
            } else {
                const errorData = await res.json().catch(() => null)
                alert(errorData?.error || 'Error al guardar el artículo.')
            }
        } catch (err) {
            console.error(err)
            alert('Error en el sistema.')
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 pb-32">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
                    {post ? 'Editar Artículo' : 'Nuevo Artículo'}
                </h1>
                <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                        <input
                            type="checkbox"
                            checked={formData.isPublished}
                            onChange={(e) => setFormData(prev => ({ ...prev, isPublished: e.target.checked }))}
                            className="rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
                        />
                        Publicar
                    </label>
                    <button
                        type="submit"
                        disabled={isSaving}
                        className="flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700 transition disabled:opacity-50"
                    >
                        <Save size={18} />
                        {isSaving ? 'Guardando...' : 'Guardar Artículo'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* Main Content Area (Left col) */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Main Info */}
                    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-6 font-sans">Información Principal</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-neutral-700">Título (H1)</label>
                                <input
                                    required
                                    type="text"
                                    value={formData.title}
                                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                    className="block w-full rounded-md border border-neutral-300 px-4 py-2 align-middle text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 font-sans"
                                    placeholder="El fascinante título de tu post"
                                />
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-neutral-700">Slug (URL)</label>
                                <div className="flex rounded-md shadow-sm">
                                    <span className="inline-flex items-center rounded-l-md border border-r-0 border-neutral-300 bg-neutral-50 px-3 text-neutral-500 sm:text-sm">
                                        /blog/
                                    </span>
                                    <input
                                        required
                                        type="text"
                                        value={formData.slug}
                                        onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                                        onBlur={handleSlugBlur}
                                        className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border border-neutral-300 px-4 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                        placeholder="mi-super-post"
                                    />
                                </div>
                                <p className="mt-1 text-xs text-neutral-500">Se genera automáticamente solo con minúsculas, guiones y letras inglesas.</p>
                            </div>
                        </div>
                    </div>

                    {/* Content Editor */}
                    <div className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col items-stretch">
                        <div className="flex flex-col border-b border-neutral-200 bg-neutral-50">
                            <div className="flex px-2 py-2 items-center justify-between">
                                <div>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('text')}
                                        className={`rounded-md px-4 py-1.5 text-sm font-medium transition ${activeTab === 'text' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                                            }`}
                                    >
                                        Normal (Texto)
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab('html')}
                                        className={`ml-2 rounded-md px-4 py-1.5 text-sm font-medium transition ${activeTab === 'html' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                                            }`}
                                    >
                                        HTML Código
                                    </button>
                                </div>
                                <div className="px-4 text-xs font-medium text-neutral-500 bg-neutral-100 py-1.5 rounded-full border border-neutral-200">
                                    {wordCount} palabras
                                </div>
                            </div>

                            {/* Toolbar - Only visible in text mode */}
                            {activeTab === 'text' && (
                                <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-t border-neutral-200 bg-white">
                                    <button type="button" onClick={() => execCmd('bold')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Negrita">
                                        <Bold size={16} />
                                    </button>
                                    <button type="button" onClick={() => execCmd('italic')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Cursiva">
                                        <Italic size={16} />
                                    </button>
                                    <button type="button" onClick={() => execCmd('underline')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Subrayado">
                                        <Underline size={16} />
                                    </button>
                                    <div className="w-px h-6 bg-neutral-300 mx-1"></div>
                                    <button type="button" onClick={() => execCmd('formatBlock', 'H2')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Título 2">
                                        <Heading1 size={16} />
                                    </button>
                                    <button type="button" onClick={() => execCmd('formatBlock', 'H3')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Título 3">
                                        <Heading2 size={16} />
                                    </button>
                                    <div className="w-px h-6 bg-neutral-300 mx-1"></div>
                                    <button type="button" onClick={() => execCmd('insertUnorderedList')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Lista Viñetas">
                                        <List size={16} />
                                    </button>
                                    <button type="button" onClick={() => execCmd('insertOrderedList')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Lista Numerada">
                                        <ListOrdered size={16} />
                                    </button>
                                    <div className="w-px h-6 bg-neutral-300 mx-1"></div>
                                    <button type="button" onClick={() => execCmd('formatBlock', 'BLOCKQUOTE')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Cita">
                                        <Quote size={16} />
                                    </button>
                                    <button type="button" onClick={() => {
                                        const url = prompt('Introduce el enlace (URL):');
                                        if (url) execCmd('createLink', url);
                                    }} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Añadir Enlace">
                                        <LinkIcon size={16} />
                                    </button>
                                    <button type="button" onClick={() => execCmd('removeFormat')} className="p-2 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 rounded" title="Borrar Formato">
                                        <RemoveFormatting size={16} />
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="p-0 border-none m-0 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent flex">
                            {activeTab === 'text' ? (
                                <div
                                    contentEditable
                                    suppressContentEditableWarning
                                    className="min-h-[400px] w-full p-6 text-neutral-800 outline-none prose prose-blue max-w-none focus:outline-none"
                                    onInput={(e) => handleWordCount(e.currentTarget.innerText)}
                                    onBlur={(e) => onContentChange(e.currentTarget.innerHTML, 'html')}
                                    dangerouslySetInnerHTML={{ __html: formData.contentHtml || formData.contentText }}
                                />
                            ) : (
                                <textarea
                                    className="min-h-[400px] w-full border-none p-6 font-mono text-sm text-neutral-800 outline-none focus:ring-0 whitespace-pre"
                                    value={formData.contentHtml}
                                    onChange={(e) => onContentChange(e.target.value, 'html')}
                                />
                            )}
                        </div>
                    </div>

                    {/* FAQS */}
                    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-lg font-semibold text-neutral-900">Preguntas Frecuentes (FAQ)</h2>
                            <button
                                type="button"
                                onClick={addFaq}
                                className="flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:bg-neutral-200 transition"
                            >
                                <Plus size={16} /> Agregar FAQ
                            </button>
                        </div>

                        {faqs.length === 0 ? (
                            <p className="text-sm text-neutral-500 mb-2">No hay preguntas frecuentes. ¡Agrega unas cuantas para enriquecer el Schema SEO!</p>
                        ) : (
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 relative">
                                        <button
                                            type="button"
                                            onClick={() => removeFaq(index)}
                                            className="absolute top-4 right-4 text-red-500 hover:text-red-700"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                        <div className="space-y-4 pr-8">
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-neutral-700">Pregunta</label>
                                                <input
                                                    type="text"
                                                    value={faq.question}
                                                    onChange={(e) => updateFaq(index, 'question', e.target.value)}
                                                    className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-sm font-medium text-neutral-700">Respuesta</label>
                                                <textarea
                                                    value={faq.answer}
                                                    onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                                                    className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm min-h-[80px]"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <p className="mt-4 text-xs text-neutral-500">
                            Estas FAQs se muestran en la página y automáticamente generan código JSON-LD para Google.
                        </p>
                    </div>

                </div>

                {/* Sidebar Info (Right col) */}
                <div className="space-y-8">
                    {/* Categories Option */}
                    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-4">Servicios (Categorías)</h2>
                        <div className="space-y-3">
                            {CATEGORIES.map(cat => (
                                <label key={cat} className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={(formData.categories || []).includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
                                    />
                                    {cat}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* SEO Options */}
                    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-neutral-900 mb-6">Optimización SEO</h2>

                        <div className="space-y-5">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-neutral-700">Meta Title</label>
                                <input
                                    type="text"
                                    value={formData.metaTitle}
                                    onChange={(e) => setFormData(prev => ({ ...prev, metaTitle: e.target.value }))}
                                    className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    placeholder="Ej: Comprar los mejores coches - Voltura"
                                />
                                <p className="mt-1 text-xs text-neutral-500">Recomendado: 50-60 caracteres.</p>
                            </div>

                            <div>
                                <label className="mb-1 block text-sm font-medium text-neutral-700">Meta Description</label>
                                <textarea
                                    value={formData.metaDescription}
                                    onChange={(e) => setFormData(prev => ({ ...prev, metaDescription: e.target.value }))}
                                    className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm min-h-[100px]"
                                    placeholder="Ej: Descubre la mejor guía en 2026..."
                                />
                                <p className="mt-1 text-xs text-neutral-500">Recomendado: 150-160 caracteres.</p>
                            </div>
                        </div>
                    </div>

                    {/* Media Option */}
                    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
                                <ImageIcon size={20} /> Imagen Principal
                            </h2>
                            <button
                                type="button"
                                onClick={() => setIsMediaModalOpen(true)}
                                className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                            >
                                <ImagePlus size={16} /> Seleccionar Imagen
                            </button>
                        </div>

                        {formData.mainImage ? (
                            <div className="space-y-4">
                                <img src={formData.mainImage} alt="Main" className="w-full h-auto rounded-lg border border-neutral-200" />
                                <button
                                    type="button"
                                    onClick={() => setFormData(prev => ({ ...prev, mainImage: '' }))}
                                    className="text-sm font-medium text-red-600 hover:text-red-800"
                                >
                                    Eliminar imagen
                                </button>
                            </div>
                        ) : (
                            <div
                                onClick={() => setIsMediaModalOpen(true)}
                                className="cursor-pointer rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-50 hover:bg-neutral-100 transition-colors p-8 text-center text-neutral-500 flex flex-col items-center justify-center gap-4"
                            >
                                <ImagePlus size={32} className="text-neutral-400" />
                                <div>
                                    <p className="mb-2 text-sm font-medium text-blue-600">Haz clic para subir o seleccionar una imagen</p>
                                    <p className="text-xs text-neutral-500">También puedes pegar un enlace directamente abajo.</p>
                                </div>
                                <input
                                    type="url"
                                    value={formData.mainImage}
                                    onChange={(e) => setFormData(prev => ({ ...prev, mainImage: e.target.value }))}
                                    onClick={(e) => e.stopPropagation()}
                                    className="block w-full mt-4 rounded-md border border-neutral-300 px-3 py-2 text-neutral-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                    placeholder="O ingresa una URL: https://..."
                                />
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <MediaSelectorModal
                isOpen={isMediaModalOpen}
                onClose={() => setIsMediaModalOpen(false)}
                onSelect={(url) => {
                    setFormData(prev => ({ ...prev, mainImage: url }))
                    setIsMediaModalOpen(false)
                }}
            />
        </form>
    )
}
