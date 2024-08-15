"use client"

import PropTypes from 'prop-types'
import { Card , CardContent,  CardHeader , CardFooter } from '../ui/card'
import Header from './header'
import Social from './social'
import BackButton from './back-button'

const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}) => {
  return (
   <>
   <Card className = "w-[400px] shadow-md">

    <CardHeader>
        <Header label={headerLabel}/>
    </CardHeader>
    <CardContent>
        {children}
    </CardContent>
    {
        showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )
    }

    <CardFooter>
        <BackButton
        label={backButtonLabel}
        href={backButtonHref}
        />
    </CardFooter>
   </Card>
   </>
  )
}


CardWrapper.propTypes = {
    children : PropTypes.node.isRequired,
    headerLabel : PropTypes.string,
    backButtonLabel : PropTypes.string,
    backButtonHref : PropTypes.string,
    showSocial : PropTypes.bool
}


export default CardWrapper