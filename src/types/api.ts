export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type Concept = {
  title: string
}

export type Module = {
  title: string
  subtitle: string
  description: string
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    alternativeText: string
    url: string
  }
}

export type sectionAboutProjectProps = {
  image: {
    alternativeText: string
    url: string
  }
  title: string
  description: string
}

export type sectionTechProps = {
  title: string
  techIcons: TechIcon[]
}

export type sectionConceptsProps = {
  title: string
  concepts: Concept[]
}

export type sectionModulesProps = {
  title: string
  modules: Module[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: sectionAboutProjectProps
  sectionTech: sectionTechProps
  sectionConcepts: sectionConceptsProps
  sectionModules: sectionModulesProps
}
