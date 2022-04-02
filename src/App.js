import { Download, Features, SectionWrapper } from "./components"
import assets from "./assets"
import styles from "./styles/Global"

const App = () => {
    return (
        <>
            <SectionWrapper
                title='You own store of Nifty NFTs Sart Selling & Growing'
                description='Buy, stire collect NFTs, echange and earn crypto. Join 25+ million people using ProfNef Marketplace.'
                showBtn
                mockupImg={assets.homeHero}
                banner='banner'
            />
            <SectionWrapper
                title='Smart User Interface Marketplace'
                description='Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design.'
                mockupImg={assets.homeCards}
                reverse
            />
            <Features />
            <SectionWrapper
                title='Deplyment'
                description="ProfNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title='Creative way to showcase the store'
                description='The app contains two screens. The first screen lists all NFTs while the second one shows the details of the specific NFT.'
                mockupImg={assets.mockup}
                banner='banner02'
            />
            <Download />
            <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
                <p className={`${styles.pText} ${styles.whiteText}`}>
                    Made with love by <span className='bold'>Raivis At Work Mastery</span>
                </p>
            </div>
        </>
    )
}

export default App
