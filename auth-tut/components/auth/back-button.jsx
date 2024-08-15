import PropTypes from 'prop-types'
import { Button } from '../ui/button'
import Link from 'next/link'

const BackButton = ({
    label,
    href
}) => {
  return (
    <>
    <Button
    variant='link'
    size='lg'
    className="font-normal w-full"
    asChild

    >
        <Link href={href}>
        {label}
        </Link>
    </Button>
    </>
  )
}

BackButton.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string
}

export default BackButton