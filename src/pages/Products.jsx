import bestseller_1 from "../assets/images/bestseller_1.jpg"
import bestseller_2 from "../assets/images/bestseller_2.jpg"
import bestseller_3 from "../assets/images/bestseller_3.png"
import bestseller_4 from "../assets/images/bestseller_4.png"
import Footer from "../components/Footer"


function Products(){
    return(
        <>
        
        <section className="p-4 text-center">
        <h1 className="text-3xl font-bold mt-5 text-center">Our Products</h1>

         
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 col-span-2 mt-5">
            <div className="text-center">

                
            <img src={bestseller_1} className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                    
                <h1 className="mr-4">Rose Plant</h1>
                <p className="mr-6">$20</p>
            </div>
            <div className="text-center">
            <img src={bestseller_2} className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                    
                <h1 className="mr-4">Lily Plant</h1>
                <p className="mr-5">$20</p>
            </div>
            <div className="text-center">
            <img src={bestseller_2} className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                   
                <h1 className="mr-4">Hibiscus Rose</h1>
                <p className="mr-5">$20</p>
            </div>
            <div className="text-center">
            <img src={bestseller_3}  className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                
                <h1 className="mr-4">New pet plant</h1>
                <p className="mr-5">$20</p>
            </div>

            <div className="text-center">
            <img src={bestseller_4} className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                 
                <h1 className="mr-4">Lily Plant</h1>
                <p className="mr-5">$20</p>
            </div>

            <div className="text-center">
            <img src={bestseller_2}  className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                 
                <h1 className="mr-4">Rose Plant</h1>
                <p className="mr-5">$20</p>
            </div>

            <div className="text-center">
            <img src={bestseller_1}  className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                <h1 className="mr-4">Lily Plant</h1>
                <p className="mr-5">$20</p>
            </div>

            <div className="text-center">
            <img src={bestseller_4} className="inline hover:shadow-xl transform hover:-translate-y-2"></img>
                <h1 className="mr-4">Hibiscus Rose</h1>
                <p className="mr-5">$20</p>
            </div>

        </div>

    </section>

        </>
    )
}

export default Products