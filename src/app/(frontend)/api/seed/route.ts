import { NextResponse } from 'next/server'
import { getPayloadClient } from '@/lib/payload'

export async function POST() {
  try {
    const payload = await getPayloadClient()
    const log: string[] = []

    // ===== 1. COMPANY INFO =====
    const richTextParagraph = (text: string) => ({
      type: 'paragraph',
      children: [{ type: 'text', text }],
      version: 1,
    })

    const companyFullDescription = {
      root: {
        type: 'root',
        children: [
          richTextParagraph('FTECH Solutions Sdn Bhd is a full-service lighting solutions provider, delivering comprehensive expertise across all aspects of lighting design, site management, cabling works, installation, and maintenance. Founded with the belief that light shapes experiences, we have grown into a trusted partner for developers, architects, and designers across Malaysia and Singapore.'),
          richTextParagraph('Our team of experienced lighting designers and engineers work collaboratively with clients to transform spaces through innovative lighting concepts. From initial consultation and conceptual design through to final installation and commissioning, we manage every phase of the lighting process with precision and care.'),
          richTextParagraph('With a portfolio spanning commercial towers, luxury residences, automotive showrooms, industrial facilities, and heritage landmarks, FTECH has demonstrated versatility and excellence across diverse sectors. Our commitment to quality, sustainability, and client satisfaction drives everything we do.'),
        ],
        direction: null,
        format: '',
        indent: 0,
        version: 1,
      },
    }

    const existingCompany = await payload.find({ collection: 'company-info', limit: 1 })
    if (existingCompany.docs.length === 0) {
      await payload.create({
        collection: 'company-info',
        data: {
          companyName: 'FTECH Solutions Sdn Bhd',
          tagline: 'Light Made Beautiful',
          email: 'ftechsolutions.sb@gmail.com',
          phone: '+60 3 8021 7905',
          aboutCompany: {
            shortDescription: 'As a full-service lighting solutions provider, FTECH Solutions Sdn Bhd delivers comprehensive expertise across all aspects of lighting design, site management, cabling works, installation, and maintenance.',
            fullDescription: companyFullDescription,
            vision: 'To evolve as one of the key players in the lighting design industries, setting new standards for innovation and sustainability.',
            mission: 'Our mission at FTECH is to deliver values by solving complexities in every lighting project we are involved in, ensuring functional and aesthetic excellence.',
            values: [
              { title: 'Quality Striving', description: 'Excellence in every aspect of our work.' },
              { title: 'Care', description: 'Deep respect for our clients, partners, and team members.' },
              { title: 'Agility', description: 'Proactive and flexible mindset in every challenge.' },
              { title: 'Integrity', description: 'Honesty and accountability in all dealings.' },
            ],
          },
        },
      })
      log.push('Company Info created')
    } else {
      // Update existing record with fullDescription if missing
      const doc = existingCompany.docs[0]
      if (!doc.aboutCompany?.fullDescription) {
        await payload.update({
          collection: 'company-info',
          id: doc.id,
          data: {
            aboutCompany: {
              ...doc.aboutCompany,
              fullDescription: companyFullDescription,
            },
          },
        })
        log.push('Company Info updated with fullDescription')
      } else {
        log.push('Company Info already exists, skipped')
      }
    }

    // ===== 2. LOCATION =====
    const existingLocations = await payload.find({ collection: 'locations', limit: 1 })
    if (existingLocations.docs.length === 0) {
      await payload.create({
        collection: 'locations',
        data: {
          city: 'Selangor',
          country: 'Malaysia',
          isHeadquarters: true,
          address: {
            building: '10-2',
            street: 'Jln USJ 9/5N, Subang Business Centre',
            postalCode: '47600',
          },
          contact: {
            phone: '+60 3 8021 7905',
            email: 'ftechsolutions.sb@gmail.com',
          },
          businessHours: [
            { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
            { day: 'Saturday', time: '9:00 AM - 1:00 PM' },
            { day: 'Sunday', time: 'Closed' },
          ],
          order: 1,
        },
      })
      log.push('Location created')
    } else {
      log.push('Location already exists, skipped')
    }

    // ===== 3. SERVICES - Core Competencies =====
    const allServices = await payload.find({ collection: 'services', limit: 100 })
    const existingSlugs = new Set(allServices.docs.map((d) => d.slug))

    const coreServices = [
      { name: 'Design', slug: 'design', shortDescription: 'FTECH offers complete lighting design services for both interior and exterior applications. Beyond visual aesthetics, FTECH provides advanced control system design and seamless integration to meet the modern demands of intelligent lighting environments.', order: 1 },
      { name: 'Customization', slug: 'customization', shortDescription: 'Specializing in bespoke luminaires and custom fabrication, we tailor lighting solutions to meet specific project requirements and architectural visions.', order: 2 },
      { name: 'Supply', slug: 'supply', shortDescription: 'We supply high-quality lighting products and systems, sourcing the best components to ensure durability, efficiency, and performance.', order: 3 },
      { name: 'Project Management', slug: 'project-management', shortDescription: 'Our dedicated project management team ensures seamless coordination across all phases, maintaining timeline adherence, budget control, and quality standards.', order: 4 },
      { name: 'Testing & Commissioning', slug: 'testing-commissioning', shortDescription: 'Our team conducts rigorous testing and commissioning to ensure all systems operate perfectly and meet safety and performance standards.', order: 5 },
      { name: 'After Sales', slug: 'after-sales', shortDescription: 'We offer continuous after-sales support and maintenance to ensure optimal performance and long-term reliability of all installed lighting systems.', order: 6 },
    ]

    let coreCreated = 0
    for (const svc of coreServices) {
      if (!existingSlugs.has(svc.slug)) {
        await payload.create({
          collection: 'services',
          data: { ...svc, category: 'core-competencies', status: 'published' },
        })
        coreCreated++
      }
    }
    log.push(coreCreated > 0 ? `${coreCreated} Core Competencies services created` : 'Core Competencies already exist, skipped')

    // ===== 4. SERVICES - Lighting Solutions =====
    const solutionServices = [
      { name: 'Conceptual Lighting Design', slug: 'conceptual-lighting-design', shortDescription: "Creating powerful experiences, we reinforce creative concepts through interplay of structural form, light, shadow and colour, creating atmospheres that profoundly impact one's experience of space.", features: [{ title: 'Visual Narrative', description: '' }, { title: 'Mood Boarding', description: '' }, { title: '3D Visualization', description: '' }, { title: 'Design Strategy', description: '' }], order: 1 },
      { name: 'Bespoke Customization', slug: 'bespoke-customization', shortDescription: 'Our customized and bespoke lighting services is central to our business here at FTECH. We specialize in creating unique, tailor-made lighting solutions.', features: [{ title: 'Custom Design & Fabrication', description: '' }, { title: 'Decorative Lighting', description: '' }, { title: 'Unique & Exclusive Fixtures', description: '' }, { title: 'Integration with Smart Technology', description: '' }], order: 2 },
      { name: 'Architectural Lighting', slug: 'architectural-lighting', shortDescription: 'Bringing together the art, science and technology, adding architectural lighting to property. We create sophisticated lighting schemes that enhance architectural features.', features: [{ title: 'Facade Lighting', description: '' }, { title: 'Landscape Integration', description: '' }, { title: 'Heritage Buildings', description: '' }, { title: 'Urban Planning', description: '' }], order: 3 },
      { name: 'Commercial & Residential', slug: 'commercial-residential', shortDescription: 'A full-service commercial and residential lighting contractor and E&E group of companies. We deliver comprehensive lighting solutions.', features: [{ title: 'Office Spaces', description: '' }, { title: 'Retail Environments', description: '' }, { title: 'Luxury Homes', description: '' }, { title: 'Hospitality', description: '' }], order: 4 },
      { name: 'Design & Installation', slug: 'design-installation', shortDescription: 'Covering all stages from lighting, consultancy and feasibility studies to design, testing and installation.', features: [{ title: 'Project Management', description: '' }, { title: 'Testing & Commissioning', description: '' }, { title: 'Maintenance', description: '' }, { title: 'Safety Compliance', description: '' }], order: 5 },
    ]

    let solnCreated = 0
    for (const svc of solutionServices) {
      if (!existingSlugs.has(svc.slug)) {
        await payload.create({
          collection: 'services',
          data: { ...svc, category: 'lighting-solutions', status: 'published' },
        })
        solnCreated++
      }
    }
    log.push(solnCreated > 0 ? `${solnCreated} Lighting Solutions services created` : 'Lighting Solutions already exist, skipped')

    // ===== 5. PROJECTS =====
    const allProjects = await payload.find({ collection: 'projects', limit: 100 })
    const existingProjectSlugs = new Set(allProjects.docs.map((d) => d.slug))

    const projects = [
      { name: 'Aria KLCC', slug: 'aria-klcc', category: 'residential' as const, scope: 'Luxury Residential Lighting', location: 'Kuala Lumpur', year: 2019, description: 'A prestigious residential development where lighting design enhances the architectural elegance and creates an ambiance of sophisticated luxury.', order: 1 },
      { name: 'Menara Hap Seng 3', slug: 'menara-hap-seng-3', category: 'commercial' as const, scope: 'Facade & Interior Lighting', location: 'Kuala Lumpur', description: 'A landmark commercial tower featuring integrated facade lighting that accentuates its verticality and modern architectural form.', order: 2 },
      { name: 'Mercedes Showroom', slug: 'mercedes-showroom', category: 'automotive' as const, scope: 'Automotive Retail Experience', location: 'Puchong, Selangor', description: 'Precision lighting design tailored to highlight the sleek lines and premium finish of luxury automobiles in a retail environment.', order: 3 },
      { name: 'Autohaus Setia Alam', slug: 'autohaus-setia-alam', category: 'automotive' as const, scope: 'Showroom Lighting', location: 'Setia Alam, Selangor', description: 'Creating an inviting and dynamic atmosphere for automotive display, ensuring optimal color rendering and visual comfort.', order: 4 },
      { name: 'Sime Darby', slug: 'sime-darby', category: 'commercial' as const, scope: 'Business Centre Lighting', location: 'Singapore', description: 'Functional and aesthetic lighting solutions for a premier business centre, balancing corporate professionalism with architectural warmth.', order: 5 },
      { name: 'Akasa Cheras', slug: 'akasa-cheras', category: 'outdoor' as const, scope: 'Exterior & Landscape', location: 'Cheras South, Selangor', description: 'Enhancing the outdoor living experience through strategic landscape lighting that promotes safety, wayfinding, and visual appeal.', order: 6 },
      { name: 'One @ Changi City', slug: 'one-changi-city', category: 'commercial' as const, scope: 'Commercial Hub', location: 'Singapore', description: 'Integrated lighting solutions for a bustling commercial hub, focusing on energy efficiency and creating a vibrant urban environment.', order: 7 },
      { name: 'CMC Materials', slug: 'cmc-materials', category: 'industrial' as const, scope: 'Industrial Facility', location: 'Singapore', description: 'High-performance industrial lighting designed to meet strict operational standards, ensuring safety and productivity in a manufacturing setting.', order: 8 },
      { name: 'Hap Seng Industrial Park', slug: 'hap-seng-industrial-park', category: 'industrial' as const, scope: 'Industrial Park', location: 'Selangor', description: 'Comprehensive lighting infrastructure for a modern industrial park, prioritizing durability, efficiency, and site-wide illumination.', order: 9 },
      { name: 'Singapore Botanic Gardens', slug: 'singapore-botanic-gardens', category: 'landscape' as const, scope: 'Landscape Lighting', location: 'Singapore', description: 'Subtle and respectful lighting design for a UNESCO World Heritage site, enhancing the natural beauty while preserving the ecological balance.', order: 10 },
    ]

    let projCreated = 0
    for (const proj of projects) {
      if (!existingProjectSlugs.has(proj.slug)) {
        await payload.create({
          collection: 'projects',
          data: { ...proj, featured: proj.order <= 6, status: 'published' },
        })
        projCreated++
      }
    }
    log.push(projCreated > 0 ? `${projCreated} Projects created` : 'Projects already exist, skipped')

    // ===== 6. CLEAN UP ORPHANED MEDIA REFERENCES =====
    // Clear all featuredImage refs on services/projects (images were never uploaded)
    const allSvcs = await payload.find({ collection: 'services', limit: 100, depth: 0 })
    let cleaned = 0
    for (const svc of allSvcs.docs) {
      if (svc.featuredImage) {
        await payload.update({
          collection: 'services',
          id: svc.id,
          data: { featuredImage: null as unknown as undefined },
        })
        cleaned++
      }
    }
    const allProj = await payload.find({ collection: 'projects', limit: 100, depth: 0 })
    for (const proj of allProj.docs) {
      if (proj.featuredImage) {
        await payload.update({
          collection: 'projects',
          id: proj.id,
          data: { featuredImage: null as unknown as undefined },
        })
        cleaned++
      }
    }
    // Also delete orphaned media records (files never uploaded)
    const allMedia = await payload.find({ collection: 'media', limit: 100 })
    let mediaDeleted = 0
    for (const m of allMedia.docs) {
      const hasUrl = m.url && typeof m.url === 'string' && m.url.length > 0
      if (!hasUrl) {
        await payload.delete({ collection: 'media', id: m.id })
        mediaDeleted++
      }
    }
    log.push(cleaned > 0 ? `${cleaned} orphaned media references cleaned` : 'No orphaned media references')
    if (mediaDeleted > 0) log.push(`${mediaDeleted} orphaned media records deleted`)

    // ===== 7. PROMOTE ALL USERS TO ADMIN =====
    const users = await payload.find({ collection: 'users', limit: 100 })
    let usersPromoted = 0
    for (const user of users.docs) {
      if (user.role !== 'admin') {
        await payload.update({
          collection: 'users',
          id: user.id,
          data: { role: 'admin' },
        })
        usersPromoted++
      }
    }
    log.push(usersPromoted > 0 ? `${usersPromoted} user(s) promoted to admin` : 'All users already admin')

    return NextResponse.json({ success: true, log })
  } catch (error) {
    console.error('Seed error:', error)
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}
