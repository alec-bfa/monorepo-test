import {SchemaTypeDefinition} from 'sanity'
import contactInfo from './contact-info'
import exhibitorInformation from './exhibitor-information'
import exhibitors from './exhibitors'
import sponsorFaq from './sponsor-faq'
import sponsors from './sponsors'
import team from './team'
import tickets from './tickets'

const schemas: SchemaTypeDefinition[] = [
  contactInfo,
  team,
  tickets,
  sponsors,
  sponsorFaq,
  exhibitors,
  exhibitorInformation,
]

export default schemas
