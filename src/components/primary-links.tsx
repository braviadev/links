import SparkleLink from './sparkle-link'

const PrimaryLinks = () => {
  return (
    <div className='mb-6 flex items-center justify-center gap-6'>
      <SparkleLink href='https://bravía.com' target='_blank' rel='noopener, noreferrer'>
        Portfolio
      </SparkleLink>
      <SparkleLink href='mailto:me@bravía.com'>me@bravía.com</SparkleLink>
    </div>
  )
}

export default PrimaryLinks
