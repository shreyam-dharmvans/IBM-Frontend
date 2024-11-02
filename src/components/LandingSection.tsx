import landing from '../../public/landingImg.jpg'

export const LandingSection = () => {
    return (
        <div className='landing-section'>
            <div className='text-landing'>

                Welcome to <b>No-Poverty</b>, where we believe that everyone deserves a fair chance at a better life. Our mission is to eradicate poverty by connecting passionate volunteers, donors, and organizations with impactful opportunities to support vulnerable communities. Through dedicated events, resources, and collaborative initiatives, we aim to provide sustainable solutions that create lasting change.

                Together, we can break the cycle of poverty and help in</div>
            <img src={landing} alt="" height={400} className='image-landing' />
        </div>
    )
}
