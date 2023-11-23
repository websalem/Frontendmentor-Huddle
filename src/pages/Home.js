import Footer from '../components/Footer';
import Hero from '../components/Hero';
import LandingpageSection from '../components/LandingpageSection';
import img1 from '../assets/images/illustration-grow-together.svg';
import img2 from '../assets/images/illustration-flowing-conversation.svg';
import img3 from '../assets/images/illustration-your-users.svg'
const Home = () => {
    return (
        <div>

            <Hero />
            <LandingpageSection title={'Grow Together'}
                text={' Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.'}
                image={img1}
            />
            <LandingpageSection title={'Flowing Conversations'}
                text={' you woulant paginate a conversation in real lite, so wny ac it online? Our threads have just-in-time loading for a more natural flow.'}
                image={img2}
            />
            <LandingpageSection title={'Your Users'}
                text={" It lakes no time at all to integrate huddle with vour app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."}
                image={img3}
            />
            <Footer />
        </div>
    )
}
export default Home