export default [
{ locale: 'id', key: 'layout', loader: async () => (await import('../../routes/+layout_id.json')).default, }, 
{ locale: 'en', key: 'layout', loader: async () => (await import('../../routes/+layout_en.json')).default, }, 
{ locale: 'id', key: '', routes: ['/'], loader: async () => (await import('../../routes/+page_id.json')).default, }, 
{ locale: 'en', key: '', routes: ['/'], loader: async () => (await import('../../routes/+page_en.json')).default, }, 
{ locale: 'id', key: 'about-us', routes: ['/about-us/'], loader: async () => (await import('../../routes/about-us/+page_id.json')).default, }, 
{ locale: 'en', key: 'about-us', routes: ['/about-us/'], loader: async () => (await import('../../routes/about-us/+page_en.json')).default, }, 
{ locale: 'id', key: 'contact-us', routes: ['/contact-us/'], loader: async () => (await import('../../routes/contact-us/+page_id.json')).default, }, 
{ locale: 'en', key: 'contact-us', routes: ['/contact-us/'], loader: async () => (await import('../../routes/contact-us/+page_en.json')).default, }, 
{ locale: 'id', key: 'products', routes: ['/products/'], loader: async () => (await import('../../routes/products/+page_id.json')).default, }, 
{ locale: 'en', key: 'products', routes: ['/products/'], loader: async () => (await import('../../routes/products/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.bostik', routes: ['/products/bostik/'], loader: async () => (await import('../../routes/products/bostik/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.bostik', routes: ['/products/bostik/'], loader: async () => (await import('../../routes/products/bostik/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.conwood', routes: ['/products/conwood/'], loader: async () => (await import('../../routes/products/conwood/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.conwood', routes: ['/products/conwood/'], loader: async () => (await import('../../routes/products/conwood/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.knauf', routes: ['/products/knauf/'], loader: async () => (await import('../../routes/products/knauf/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.knauf', routes: ['/products/knauf/'], loader: async () => (await import('../../routes/products/knauf/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.onduline', routes: ['/products/onduline/'], loader: async () => (await import('../../routes/products/onduline/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.onduline', routes: ['/products/onduline/'], loader: async () => (await import('../../routes/products/onduline/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.onduline.bituline', routes: ['/products/onduline/bituline/'], loader: async () => (await import('../../routes/products/onduline/bituline/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.onduline.bituline', routes: ['/products/onduline/bituline/'], loader: async () => (await import('../../routes/products/onduline/bituline/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.onduline.onducasa', routes: ['/products/onduline/onducasa/'], loader: async () => (await import('../../routes/products/onduline/onducasa/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.onduline.onducasa', routes: ['/products/onduline/onducasa/'], loader: async () => (await import('../../routes/products/onduline/onducasa/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.rockwool', routes: ['/products/rockwool/'], loader: async () => (await import('../../routes/products/rockwool/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.rockwool', routes: ['/products/rockwool/'], loader: async () => (await import('../../routes/products/rockwool/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.royalboard', routes: ['/products/royalboard/'], loader: async () => (await import('../../routes/products/royalboard/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.royalboard', routes: ['/products/royalboard/'], loader: async () => (await import('../../routes/products/royalboard/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.wacker', routes: ['/products/wacker/'], loader: async () => (await import('../../routes/products/wacker/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.wacker', routes: ['/products/wacker/'], loader: async () => (await import('../../routes/products/wacker/+page_en.json')).default, }, 
{ locale: 'id', key: 'products.yoshino', routes: ['/products/yoshino/'], loader: async () => (await import('../../routes/products/yoshino/+page_id.json')).default, }, 
{ locale: 'en', key: 'products.yoshino', routes: ['/products/yoshino/'], loader: async () => (await import('../../routes/products/yoshino/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects', routes: ['/projects/'], loader: async () => (await import('../../routes/projects/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects', routes: ['/projects/'], loader: async () => (await import('../../routes/projects/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.ais', routes: ['/projects/ais/'], loader: async () => (await import('../../routes/projects/ais/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.ais', routes: ['/projects/ais/'], loader: async () => (await import('../../routes/projects/ais/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.aston', routes: ['/projects/aston/'], loader: async () => (await import('../../routes/projects/aston/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.aston', routes: ['/projects/aston/'], loader: async () => (await import('../../routes/projects/aston/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.juanda', routes: ['/projects/juanda/'], loader: async () => (await import('../../routes/projects/juanda/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.juanda', routes: ['/projects/juanda/'], loader: async () => (await import('../../routes/projects/juanda/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.ngurah', routes: ['/projects/ngurah/'], loader: async () => (await import('../../routes/projects/ngurah/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.ngurah', routes: ['/projects/ngurah/'], loader: async () => (await import('../../routes/projects/ngurah/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.satrio', routes: ['/projects/satrio/'], loader: async () => (await import('../../routes/projects/satrio/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.satrio', routes: ['/projects/satrio/'], loader: async () => (await import('../../routes/projects/satrio/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed/'], loader: async () => (await import('../../routes/projects/sheikhzayed/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed/'], loader: async () => (await import('../../routes/projects/sheikhzayed/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.vihara', routes: ['/projects/vihara/'], loader: async () => (await import('../../routes/projects/vihara/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.vihara', routes: ['/projects/vihara/'], loader: async () => (await import('../../routes/projects/vihara/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.waterplace', routes: ['/projects/waterplace/'], loader: async () => (await import('../../routes/projects/waterplace/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.waterplace', routes: ['/projects/waterplace/'], loader: async () => (await import('../../routes/projects/waterplace/+page_en.json')).default, }, 
{ locale: 'id', key: 'services', routes: ['/services/'], loader: async () => (await import('../../routes/services/+page_id.json')).default, }, 
{ locale: 'en', key: 'services', routes: ['/services/'], loader: async () => (await import('../../routes/services/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.decorative', routes: ['/services/decorative/'], loader: async () => (await import('../../routes/services/decorative/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.decorative', routes: ['/services/decorative/'], loader: async () => (await import('../../routes/services/decorative/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.epoxy', routes: ['/services/epoxy/'], loader: async () => (await import('../../routes/services/epoxy/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.epoxy', routes: ['/services/epoxy/'], loader: async () => (await import('../../routes/services/epoxy/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.gypsum', routes: ['/services/gypsum/'], loader: async () => (await import('../../routes/services/gypsum/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.gypsum', routes: ['/services/gypsum/'], loader: async () => (await import('../../routes/services/gypsum/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.metal', routes: ['/services/metal/'], loader: async () => (await import('../../routes/services/metal/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.metal', routes: ['/services/metal/'], loader: async () => (await import('../../routes/services/metal/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.sealants', routes: ['/services/sealants/'], loader: async () => (await import('../../routes/services/sealants/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.sealants', routes: ['/services/sealants/'], loader: async () => (await import('../../routes/services/sealants/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.waterproofing', routes: ['/services/waterproofing/'], loader: async () => (await import('../../routes/services/waterproofing/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.waterproofing', routes: ['/services/waterproofing/'], loader: async () => (await import('../../routes/services/waterproofing/+page_en.json')).default, }, 
]