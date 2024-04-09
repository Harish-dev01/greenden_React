 import Footer from "../components/Footer"

function Contact(){
    return(
<>


 
<section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-3xl text-center text-gray-900 font-bold">Contact Us</h2>
           
            <form action="#" className="space-y-8">
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email"  id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="Enter Yor Email" required></input>
                 </div>
                <div>
                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>

                    <input type="text"  id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300   " placeholder="Let us know how we can help you" required></input>
                    
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit  bg-green-500">Send message</button>
            </form>
        </div>
      </section>
      



</>



    )
}

export default Contact
 

    