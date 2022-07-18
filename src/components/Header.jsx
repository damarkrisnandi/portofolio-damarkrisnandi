import { Fragment } from "react";
// import { pixel_me } from '../../public/pixel_me.png'

const Header = () => {
    return ( 
        <Fragment>
            <div className="h-screen">
                <div className="flex flex-col justify-center h-96">
                    <div className="container w-10/12 mx-auto">
                        <img src={'/pixel_me.png'} alt="logo" className="w-40 h-40" />
                        {/* <Image src="/pixel_me.png" width={128} height={128} /> */}
                        <p className="text-2xl md:text-4xl font-semibold">Damar Krisnandi Ramdan</p>
                        <p className="text-lg md:text-xl">Frontend Developer</p>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
}
 
export default Header;