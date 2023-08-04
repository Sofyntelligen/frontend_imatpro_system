import React, { ReactNode, useEffect } from 'react'
import { mdiForwardburger, mdiBackburger, mdiMenu } from '@mdi/js'
import DefinitionAside from './config/menu/DefinitionAside'
import DefinitionNarBar from './config/menu/DefinitionNarBar'
import BaseIcon from '../components/BaseIcon'
import NavBar from '../components/NavBar'
import NavBarItemPlain from '../components/NavBarItemPlain'
import AsideMenu from '../components/AsideMenu'
import FooterBar from '../components/FooterBar'
import { setUser } from '../stores/mainSlice'
import { useAppDispatch, useAppSelector } from '../stores/hooks'
import { asideLgToggle, asideMobileToggle, setIsAsideMobileExpanded } from '../stores/layoutSlice'
import SnackBar from '../components/SnackBar'
import FormField from '../components/FormField'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode
}

export default function DashBoardMathematical({ children }: Props) {

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(
            setUser({
                name: 'Jose Daniel',
                email: 'josedaniel.hernandez.osorio@sofyntelligen.com',
                avatar:
                    'https://api.dicebear.com/6.x/initials/svg?seed=JD&backgroundColor=b6e3f4,c0aede,d1d4f9,ffd5dc',
            })
        )
    })

    const darkMode = useAppSelector((state) => state.style.darkMode)
    const isAsideMobileExpanded = useAppSelector((state) => state.layout.isAsideMobileExpanded)
    const isAsideLgActive = useAppSelector((state) => state.layout.isAsideLgActive)

    const layoutAsidePadding = isAsideLgActive ? 'lg:pl-22' : 'xl:pl-22'

    const router = useRouter()

    useEffect(() => {
        const handleRouteChangeStart = () => {
            dispatch(setIsAsideMobileExpanded(false))
        }

        router.events.on('routeChangeStart', handleRouteChangeStart)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off('routeChangeStart', handleRouteChangeStart)
        }
    }, [router.events, dispatch])

    return (
        <div className={`${darkMode ? 'dark' : ''} overflow-hidden lg:overflow-visible`}>
            <div
                className={`${layoutAsidePadding} ${
                    isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''
                } pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100`}
            >
                <NavBar
                    menu={DefinitionNarBar}
                    className={`${layoutAsidePadding} ${isAsideMobileExpanded ? 'ml-60 lg:ml-0' : ''}`}
                >
                    <NavBarItemPlain display="flex lg:hidden" onClick={() => dispatch(asideMobileToggle())}>
                        <BaseIcon path={isAsideMobileExpanded ? mdiBackburger : mdiForwardburger} size="24" />
                    </NavBarItemPlain>
                    <NavBarItemPlain
                        display="hidden lg:flex xl:hidden"
                        onClick={() => dispatch(asideLgToggle())}
                    >
                        <BaseIcon path={mdiMenu} size="24" />
                    </NavBarItemPlain>
                    <NavBarItemPlain useMargin>
                        <Formik
                            initialValues={{
                                search: '',
                            }}
                            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
                        >
                            <Form>
                                <FormField isBorderless isTransparent>
                                    <Field name="search" placeholder="Search" />
                                </FormField>
                            </Form>
                        </Formik>
                    </NavBarItemPlain>
                </NavBar>
                <AsideMenu menu={DefinitionAside} />
                {children}
                <FooterBar>
                    <a
                        href="https://github.com/josedanielhernandezosorio"
                        target="_blank"
                        className="text-blue-600 ml-1"
                        rel="noreferrer"
                    >
                        0
                    </a>{' '}
                    version
                </FooterBar>

                <SnackBar />
            </div>
        </div>
    )
}
