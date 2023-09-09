import Background from '../assets/images/car-inventory.jpg'

function home() {
  return (
    <div 
        style={{ backgroundImage: `url(${Background})`}} 
        className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
        >
           <div className='flex place-items-start align-top h-screen pt-5'>
                <h3 className='p-5 bg-black bg-opacity-50 text-white rounded'>Hello. Welcome to Frankie's Car Inventory</h3>
           </div>
    </div>
  )
}

export default home