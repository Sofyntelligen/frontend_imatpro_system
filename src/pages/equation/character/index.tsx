import {
    mdiAccountMultiple,
    mdiCartOutline,
    mdiChartPie,
    mdiChartTimelineVariant,
    mdiGithub,
    mdiMonitorCellphone,
    mdiReload,
    mdiSemanticWeb,
} from '@mdi/js'

import Head from 'next/head'
import React, {useState, useEffect, useContext} from 'react'
import type {ReactElement} from 'react'
import BaseButton from '../../../components/BaseButton'
import DashBoardMathematical from '../../../layouts/DashBoardMathematical'
import SectionMain from '../../../components/SectionMain'
import SectionTitleLineWithButton from '../../../components/SectionTitleLineWithButton'
import {getPageTitle} from '../../../layouts/config/properties'
import {CharacterContext} from "../../../../contexts/Character"
import CardBoxWidgetMath from "../../../components/CardBoxWidgetMath"
import {CharacterProvider} from '../../../../contexts/Character'

const DashboardCharacter = () => {

    const {all, getAll} = useContext(CharacterContext)

    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            <Head>
                <title>{getPageTitle('Character Latex')}</title>
            </Head>

            <SectionMain>
                <SectionTitleLineWithButton icon={mdiSemanticWeb} title="" main>
                    <BaseButton
                        href="https://github.com/josedanielhernandezosorio"
                        target="_blank"
                        icon={mdiGithub}
                        label="Star on GitHub"
                        color="contrast"
                        roundedFull
                        small
                    />
                </SectionTitleLineWithButton>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">

                    {all &&
                        all.map((character) => (
                            <CardBoxWidgetMath
                                number={character.id}
                                latex={character.view_latex}
                                iconColor="success"
                                label={character.view_text}
                            />
                        ))}
                </div>

            </SectionMain>
        </>
    )
}

DashboardCharacter.getLayout = function getLayout(page: ReactElement) {
    return (
        <>
            <DashBoardMathematical>
                <CharacterProvider>
                    {page}
                </CharacterProvider>
            </DashBoardMathematical>
        </>
    )
}

export default DashboardCharacter
