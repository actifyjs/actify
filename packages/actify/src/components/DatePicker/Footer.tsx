import dayjs from 'dayjs'
import React, { useCallback, useContext } from 'react'

import { Button } from '@actify/Button'
import { DATE_FORMAT } from './constants'
import DatepickerContext from './DatePickerContext'

const Footer: React.FC = () => {
  // Contexts
  const { hideDatepicker, period, changeDatepickerValue, configs, classNames } =
    useContext(DatepickerContext)

  // Functions
  const getClassName = useCallback(() => {
    if (
      typeof classNames !== 'undefined' &&
      typeof classNames?.footer === 'function'
    ) {
      return classNames.footer()
    }

    return 'flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700'
  }, [classNames])

  return (
    <div className={getClassName()}>
      <div className="w-full md:w-auto flex items-center justify-center space-x-3">
        <Button
          color="secondary"
          onClick={() => {
            hideDatepicker()
          }}
        >
          <>{configs?.footer?.cancel ? configs.footer.cancel : 'Cancel'}</>
        </Button>
        <Button
          onClick={() => {
            if (period.start && period.end) {
              changeDatepickerValue({
                startDate: dayjs(period.start).format(DATE_FORMAT),
                endDate: dayjs(period.end).format(DATE_FORMAT)
              })
              hideDatepicker()
            }
          }}
          disabled={!(period.start && period.end)}
        >
          <>{configs?.footer?.apply ? configs.footer.apply : 'Apply'}</>
        </Button>
      </div>
    </div>
  )
}

export default Footer
