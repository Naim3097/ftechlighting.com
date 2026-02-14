import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getPayloadClient() {
  const payload = await getPayload({
    config: configPromise,
  })
  return payload
}

// Get all published projects
export async function getProjects() {
  const payload = await getPayloadClient()
  
  const projects = await payload.find({
    collection: 'projects',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: 'order',
    depth: 2,
  })
  
  return projects.docs
}

// Get all published services
export async function getServices() {
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: 'order',
    depth: 2,
  })
  
  return services.docs
}

// Get services by category
export async function getServicesByCategory(category: 'core-competencies' | 'lighting-solutions') {
  const payload = await getPayloadClient()
  
  const services = await payload.find({
    collection: 'services',
    where: {
      and: [
        {
          status: {
            equals: 'published',
          },
        },
        {
          category: {
            equals: category,
          },
        },
      ],
    },
    sort: 'order',
    depth: 2,
  })
  
  return services.docs
}

// Get all locations
export async function getLocations() {
  const payload = await getPayloadClient()
  
  const locations = await payload.find({
    collection: 'locations',
    sort: 'order',
    depth: 1,
  })
  
  return locations.docs
}

// Get company info (singleton-like pattern - get first one)
export async function getCompanyInfo() {
  const payload = await getPayloadClient()
  
  const companyInfo = await payload.find({
    collection: 'company-info',
    limit: 1,
    depth: 2,
  })
  
  return companyInfo.docs[0] || null
}

// Get a page by slug
export async function getPageBySlug(slug: string) {
  const payload = await getPayloadClient()
  
  const pages = await payload.find({
    collection: 'pages',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
    depth: 2,
    limit: 1,
  })
  
  return pages.docs[0] || null
}

// Get a project by slug
export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadClient()
  
  const projects = await payload.find({
    collection: 'projects',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
    depth: 2,
    limit: 1,
  })
  
  return projects.docs[0] || null
}

// Get featured projects
export async function getFeaturedProjects() {
  const payload = await getPayloadClient()
  
  const projects = await payload.find({
    collection: 'projects',
    where: {
      and: [
        {
          status: {
            equals: 'published',
          },
        },
        {
          featured: {
            equals: true,
          },
        },
      ],
    },
    sort: 'order',
    depth: 2,
    limit: 6,
  })
  
  return projects.docs
}
