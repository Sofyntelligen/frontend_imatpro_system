import {mdiCog} from '@mdi/js'
import React from 'react'
import {ColorKey} from '../layouts/interfaces'
import BaseButton from './BaseButton'
import CardBox from './CardBox'
import PillTagTrend from './PillTagTrend'
import {MathJax, MathJaxContext} from "better-react-mathjax";

type Props = {
    number?: string
    latex: string
    iconColor: ColorKey
    label: string
}

const config = {
    loader: {load: ["input/asciimath"]}
};

const CardBoxWidgetMath = (props: Props) => {
    return (
        <CardBox>
            {props.number && (
                <div className="flex items-center justify-between mb-3">
                    <PillTagTrend
                        label={props.number}
                        type="info"
                        color="info"
                        small
                    />
                    <BaseButton icon={mdiCog} color="lightDark" small/>
                </div>
            )}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg leading-tight text-gray-500 dark:text-slate-400">{props.label}</h3>
                </div>
                {props.latex && (
                    <MathJaxContext config={config}>
                        <MathJax hideUntilTypeset={"first"}>{"`" + props.latex + "`"}</MathJax>
                    </MathJaxContext>
                )}
            </div>
        </CardBox>
    )
}

export default CardBoxWidgetMath
