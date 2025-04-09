export interface ContentItem {
  tipo: string
  texto?: string
  items?: string[]
  titulo?: string
  secciones?: { titulo: string; pagina: string }[]
}

export interface Slide {
  titulo: string
  subtitulo: string
  contenido: ContentItem[]
  diseño: string
  color_esquema: string
}

export interface Presentation {
  titulo: string
  presentador: string
  fecha: string
  slides: Slide[]
}
