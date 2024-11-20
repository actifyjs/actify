import { LinkButton } from 'actify'
import NgrokerLogo from '@/components/NgrokerLogo'
import TaildoorLogo from '@/components/TaildoorLogo'

const Sponsors = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-secondary text-2xl mb-4 text-center">Sponsors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 items-center">
        <a tabIndex={-1} target="_blank" href="https://www.taildoor.com">
          <LinkButton
            variant="text"
            className="[--md-text-button-container-height:64px] [--md-text-button-container-shape:0]"
          >
            <TaildoorLogo />
          </LinkButton>
        </a>
        <a tabIndex={-1} target="_blank" href="https://ngroker.com">
          <LinkButton
            variant="text"
            className="[--md-text-button-container-height:64px] [--md-text-button-container-shape:0]"
          >
            <NgrokerLogo />
          </LinkButton>
        </a>
      </div>
    </div>
  )
}

export default Sponsors
