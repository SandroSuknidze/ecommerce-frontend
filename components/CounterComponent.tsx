import CountUp from 'react-countup'
import { useTranslation } from 'next-i18next'

interface CounterComponentProps {
    title: string
    description: string
    end: number
    duration: number
    decimals?: number
}

export function CounterComponent({ title, description, end, duration, decimals }: CounterComponentProps) {
    const { t } = useTranslation('common')

    return (
        <div>
            <div className="text-[36px] font-medium flex gap-2 mb-[10px] justify-center">
                <div>
                    <CountUp
                        end={end}
                        duration={duration}
                        decimals={decimals}
                    />
                </div>
                <div>
                    {t('m')}
                </div>
            </div>
            <div className="font-semibold text-[18px] mb-[10px]">
                {title}
            </div>
            <div className="text-55black leading-[28px]">
                {description}
            </div>
        </div>
    )
}