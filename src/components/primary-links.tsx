import SparkleLink from './sparkle-link'

const PrimaryLinks = () => {
  return (
    <div className='mb-6 flex items-center justify-center gap-6'>
      <SparkleLink href='https://braviaprime.com' target='_blank' rel='noopener, noreferrer'>
        Portfolio
      </SparkleLink>
      <SparkleLink href='mailto:me@braviaprime.com'>me@braviaprime.com</SparkleLink>
    </div>
  )
}

export default PrimaryLinks
