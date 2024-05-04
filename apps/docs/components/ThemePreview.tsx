const ThemePreview = () => {
  return (
    <>
      {/* Primary */}
      <div className="h-28 flex w-full justify-evenly my-2">
        <div className="rounded-tl-2xl bg-primary flex-1">
          <div className="w-full h-full grid place-content-center">Primary</div>
        </div>
        <div className="bg-on-primary flex-1">
          <div className="w-full h-full grid place-content-center text-primary">
            On Primary
          </div>
        </div>
        <div className="bg-primary-container flex-1">
          <div className="w-full h-full grid place-content-center">
            Primary Container
          </div>
        </div>
        <div className="rounded-tr-2xl bg-on-primary-container flex-1">
          <div className="w-full h-full grid place-content-center text-primary-container">
            On Primary Container
          </div>
        </div>
      </div>
      {/* Secondary */}
      <div className="h-16 flex w-full justify-evenly my-2">
        <div className="bg-secondary flex-1">
          <div className="w-full h-full grid place-content-center">
            Secondary
          </div>
        </div>
        <div className="bg-on-secondary flex-1">
          <div className="w-full h-full grid place-content-center text-secondary">
            On Secondary
          </div>
        </div>
        <div className="bg-secondary-container flex-1">
          <div className="w-full h-full grid place-content-center">
            Secondary Container
          </div>
        </div>
        <div className="bg-on-secondary-container flex-1">
          <div className="w-full h-full grid place-content-center text-secondary-container">
            On Secondary Container
          </div>
        </div>
      </div>
      {/* Tertiary */}
      <div className="h-16 flex w-full justify-evenly my-2">
        <div className="bg-tertiary flex-1">
          <div className="w-full h-full grid place-content-center">
            Tertiary
          </div>
        </div>
        <div className="bg-on-tertiary flex-1">
          <div className="w-full h-full grid place-content-center text-tertiary">
            On Tertiary
          </div>
        </div>
        <div className="bg-tertiary-container flex-1">
          <div className="w-full h-full grid place-content-center">
            Tertiary Container
          </div>
        </div>
        <div className="bg-on-tertiary-container flex-1">
          <div className="w-full h-full grid place-content-center text-tertiary-container">
            On Tertiary Container
          </div>
        </div>
      </div>
      {/* Error */}
      <div className="h-16 flex w-full justify-evenly my-2">
        <div className="bg-error flex-1">
          <div className="w-full h-full grid place-content-center">Error</div>
        </div>
        <div className="bg-on-error flex-1">
          <div className="w-full h-full grid place-content-center text-error">
            On Error
          </div>
        </div>
        <div className="bg-error-container flex-1">
          <div className="w-full h-full grid place-content-center">
            Error Container
          </div>
        </div>
        <div className="bg-on-error-container flex-1">
          <div className="w-full h-full grid place-content-center text-error-container">
            On Error Container
          </div>
        </div>
      </div>
      {/* Backgroun And Surface */}
      <div className="h-16 flex w-full justify-evenly my-2">
        <div className="bg-background flex-1">
          <div className="w-full h-full grid place-content-center">
            Background
          </div>
        </div>
        <div className="bg-on-background flex-1">
          <div className="w-full h-full grid place-content-center text-background">
            On Background
          </div>
        </div>
        <div className="bg-surface flex-1">
          <div className="w-full h-full grid place-content-center">Surface</div>
        </div>
        <div className="bg-on-surface flex-1">
          <div className="w-full h-full grid place-content-center text-surface">
            On Surface
          </div>
        </div>
      </div>
      {/* Outline And Surface */}
      <div className="h-16 flex w-full justify-evenly my-2">
        <div className="rounded-bl-2xl bg-outline flex-[2_1_0%]">
          <div className="w-full h-full grid place-content-center text-surface">
            Outline
          </div>
        </div>
        <div className="bg-surface-variant flex-1">
          <div className="w-full h-full grid place-content-center">
            Surface-Variant
          </div>
        </div>
        <div className="rounded-br-2xl bg-on-surface-variant flex-1">
          <div className="w-full h-full grid place-content-center text-surface-variant">
            On Surface-Variant
          </div>
        </div>
      </div>
    </>
  )
}

export default ThemePreview
