export default [
{ locale: 'id', key: '4dm1n.layout', routes: ['/4dm1n'], loader: async () => (await import('../../routes/(admin)/4dm1n/+layout_id.json')).default, }, 
{ locale: 'en', key: '4dm1n.layout', routes: ['/4dm1n'], loader: async () => (await import('../../routes/(admin)/4dm1n/+layout_en.json')).default, }, 
{ locale: 'id', key: '4dm1n', routes: ['/4dm1n'], loader: async () => (await import('../../routes/(admin)/4dm1n/+page_id.json')).default, }, 
{ locale: 'en', key: '4dm1n', routes: ['/4dm1n'], loader: async () => (await import('../../routes/(admin)/4dm1n/+page_en.json')).default, }, 
{ locale: 'id', key: '4dm1n.login.layout', routes: ['/4dm1n/login'], loader: async () => (await import('../../routes/(admin)/4dm1n/login/+layout@_id.json')).default, }, 
{ locale: 'en', key: '4dm1n.login.layout', routes: ['/4dm1n/login'], loader: async () => (await import('../../routes/(admin)/4dm1n/login/+layout@_en.json')).default, }, 
{ locale: 'id', key: '4dm1n.login', routes: ['/4dm1n/login'], loader: async () => (await import('../../routes/(admin)/4dm1n/login/+page_id.json')).default, }, 
{ locale: 'en', key: '4dm1n.login', routes: ['/4dm1n/login'], loader: async () => (await import('../../routes/(admin)/4dm1n/login/+page_en.json')).default, }, 
{ locale: 'id', key: 'layout', loader: async () => (await import('../../routes/(app)/+layout_id.json')).default, }, 
{ locale: 'en', key: 'layout', loader: async () => (await import('../../routes/(app)/+layout_en.json')).default, }, 
{ locale: 'id', key: '', routes: ['/'], loader: async () => (await import('../../routes/(app)/+page_id.json')).default, }, 
{ locale: 'en', key: '', routes: ['/'], loader: async () => (await import('../../routes/(app)/+page_en.json')).default, }, 
{ locale: 'id', key: 'about-us', routes: ['/about-us'], loader: async () => (await import('../../routes/(app)/about-us/+page_id.json')).default, }, 
{ locale: 'en', key: 'about-us', routes: ['/about-us'], loader: async () => (await import('../../routes/(app)/about-us/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands', routes: ['/brands'], loader: async () => (await import('../../routes/(app)/brands/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands', routes: ['/brands'], loader: async () => (await import('../../routes/(app)/brands/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.bostik', routes: ['/brands/bostik'], loader: async () => (await import('../../routes/(app)/brands/bostik/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.bostik', routes: ['/brands/bostik'], loader: async () => (await import('../../routes/(app)/brands/bostik/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.conwood', routes: ['/brands/conwood'], loader: async () => (await import('../../routes/(app)/brands/conwood/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.conwood', routes: ['/brands/conwood'], loader: async () => (await import('../../routes/(app)/brands/conwood/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.knauf', routes: ['/brands/knauf'], loader: async () => (await import('../../routes/(app)/brands/knauf/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.knauf', routes: ['/brands/knauf'], loader: async () => (await import('../../routes/(app)/brands/knauf/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.onduline', routes: ['/brands/onduline'], loader: async () => (await import('../../routes/(app)/brands/onduline/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.onduline', routes: ['/brands/onduline'], loader: async () => (await import('../../routes/(app)/brands/onduline/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.onduline.bituline', routes: ['/brands/onduline/bituline'], loader: async () => (await import('../../routes/(app)/brands/onduline/bituline/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.onduline.bituline', routes: ['/brands/onduline/bituline'], loader: async () => (await import('../../routes/(app)/brands/onduline/bituline/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.onduline.onducasa', routes: ['/brands/onduline/onducasa'], loader: async () => (await import('../../routes/(app)/brands/onduline/onducasa/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.onduline.onducasa', routes: ['/brands/onduline/onducasa'], loader: async () => (await import('../../routes/(app)/brands/onduline/onducasa/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.rockwool', routes: ['/brands/rockwool'], loader: async () => (await import('../../routes/(app)/brands/rockwool/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.rockwool', routes: ['/brands/rockwool'], loader: async () => (await import('../../routes/(app)/brands/rockwool/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.royalboard', routes: ['/brands/royalboard'], loader: async () => (await import('../../routes/(app)/brands/royalboard/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.royalboard', routes: ['/brands/royalboard'], loader: async () => (await import('../../routes/(app)/brands/royalboard/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.wacker', routes: ['/brands/wacker'], loader: async () => (await import('../../routes/(app)/brands/wacker/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.wacker', routes: ['/brands/wacker'], loader: async () => (await import('../../routes/(app)/brands/wacker/+page_en.json')).default, }, 
{ locale: 'id', key: 'brands.yoshino', routes: ['/brands/yoshino'], loader: async () => (await import('../../routes/(app)/brands/yoshino/+page_id.json')).default, }, 
{ locale: 'en', key: 'brands.yoshino', routes: ['/brands/yoshino'], loader: async () => (await import('../../routes/(app)/brands/yoshino/+page_en.json')).default, }, 
{ locale: 'id', key: 'contact-us', routes: ['/contact-us'], loader: async () => (await import('../../routes/(app)/contact-us/+page_id.json')).default, }, 
{ locale: 'en', key: 'contact-us', routes: ['/contact-us'], loader: async () => (await import('../../routes/(app)/contact-us/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects', routes: ['/projects'], loader: async () => (await import('../../routes/(app)/projects/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects', routes: ['/projects'], loader: async () => (await import('../../routes/(app)/projects/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.ais', routes: ['/projects/ais'], loader: async () => (await import('../../routes/(app)/projects/ais/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.ais', routes: ['/projects/ais'], loader: async () => (await import('../../routes/(app)/projects/ais/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.aston', routes: ['/projects/aston'], loader: async () => (await import('../../routes/(app)/projects/aston/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.aston', routes: ['/projects/aston'], loader: async () => (await import('../../routes/(app)/projects/aston/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.juanda', routes: ['/projects/juanda'], loader: async () => (await import('../../routes/(app)/projects/juanda/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.juanda', routes: ['/projects/juanda'], loader: async () => (await import('../../routes/(app)/projects/juanda/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.ngurah', routes: ['/projects/ngurah'], loader: async () => (await import('../../routes/(app)/projects/ngurah/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.ngurah', routes: ['/projects/ngurah'], loader: async () => (await import('../../routes/(app)/projects/ngurah/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.satrio', routes: ['/projects/satrio'], loader: async () => (await import('../../routes/(app)/projects/satrio/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.satrio', routes: ['/projects/satrio'], loader: async () => (await import('../../routes/(app)/projects/satrio/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed'], loader: async () => (await import('../../routes/(app)/projects/sheikhzayed/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.sheikhzayed', routes: ['/projects/sheikhzayed'], loader: async () => (await import('../../routes/(app)/projects/sheikhzayed/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.vihara', routes: ['/projects/vihara'], loader: async () => (await import('../../routes/(app)/projects/vihara/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.vihara', routes: ['/projects/vihara'], loader: async () => (await import('../../routes/(app)/projects/vihara/+page_en.json')).default, }, 
{ locale: 'id', key: 'projects.waterplace', routes: ['/projects/waterplace'], loader: async () => (await import('../../routes/(app)/projects/waterplace/+page_id.json')).default, }, 
{ locale: 'en', key: 'projects.waterplace', routes: ['/projects/waterplace'], loader: async () => (await import('../../routes/(app)/projects/waterplace/+page_en.json')).default, }, 
{ locale: 'id', key: 'services', routes: ['/services'], loader: async () => (await import('../../routes/(app)/services/+page_id.json')).default, }, 
{ locale: 'en', key: 'services', routes: ['/services'], loader: async () => (await import('../../routes/(app)/services/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.decorative', routes: ['/services/decorative'], loader: async () => (await import('../../routes/(app)/services/decorative/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.decorative', routes: ['/services/decorative'], loader: async () => (await import('../../routes/(app)/services/decorative/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.epoxy', routes: ['/services/epoxy'], loader: async () => (await import('../../routes/(app)/services/epoxy/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.epoxy', routes: ['/services/epoxy'], loader: async () => (await import('../../routes/(app)/services/epoxy/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.gypsum', routes: ['/services/gypsum'], loader: async () => (await import('../../routes/(app)/services/gypsum/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.gypsum', routes: ['/services/gypsum'], loader: async () => (await import('../../routes/(app)/services/gypsum/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.metal', routes: ['/services/metal'], loader: async () => (await import('../../routes/(app)/services/metal/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.metal', routes: ['/services/metal'], loader: async () => (await import('../../routes/(app)/services/metal/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.sealants', routes: ['/services/sealants'], loader: async () => (await import('../../routes/(app)/services/sealants/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.sealants', routes: ['/services/sealants'], loader: async () => (await import('../../routes/(app)/services/sealants/+page_en.json')).default, }, 
{ locale: 'id', key: 'services.waterproofing', routes: ['/services/waterproofing'], loader: async () => (await import('../../routes/(app)/services/waterproofing/+page_id.json')).default, }, 
{ locale: 'en', key: 'services.waterproofing', routes: ['/services/waterproofing'], loader: async () => (await import('../../routes/(app)/services/waterproofing/+page_en.json')).default, }, 
]