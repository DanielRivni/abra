import {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';

const PlaceApp = () =>  {
    const  [Name, setName] =  useState('');
    const  [Type, setType] =  useState('');
    const  [Address, setAddress] =  useState('');
    const  [Places, setPlaces] =  useState([]);
    const  [NameError, setNameError] =  useState("");
    const  [AddressError, setAddressError] =  useState("");



    useEffect(() => {
        localStorage.setItem('place', Places.toString());
    }, [Places]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError("");
        setAddressError("");

        if (Name.trim() === ""){
            setNameError("Need to fill the name of the place")
            return;
        }
         if (Address.trim() === ""){
            setAddressError("Need to fill the address of the palce")
            return;
         }

        const newPlace = {
            id: Date.now(),
            Name,
            Type,
            Address,
        }
        setPlaces([newPlace,...Places]);
        setName("");
        setType("");
        setAddress("");
    };

        const  handleDropdownChange = (e) => {
            setType(e.target.value);
    };


return  (
    <div style={{maxWidth: "600px", margin:"50px auto", fontFamily:"Arial"}}>
        <h1>Create a place</h1>
        <form onSubmit={handleSubmit} style={{marginTop:"20px"}}>
            <input
            type="text"
            placeholder=' Place name'
            value={Name}
            onChange={(e) => setName(e.target.value)}
            style={{width:"100%", padding:"8px", marginBottom:"10px"}}
            />
            {NameError && <div style={{ color: "red", fontSize: "14px" }}>{NameError}</div>}
            <select  value={Type} onChange={handleDropdownChange} style={{width:"103.4%", padding:"8px", marginBottom:"10px"}}>
            <option  value="Restaurant">Restaurant</option>
            <option  value="Hotel">Hotel</option>
            <option  value="Park">Park</option>
            </select>
            <input
            type="text"
            placeholder='Address'
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
            style={{width:"100%", padding:"8px", marginBottom:"10px"}}
            />
            {AddressError && <div style={{ color: "red", fontSize: "14px" }}>{AddressError}</div>}
            <button type="submit" style={{marginTop:"10px", padding:"8px 16px"}}>
                    Add Place
            </button>
            {/* <Link to={{ pathname: '/PlacesPage', state: { places: Places } }}></Link> */}
        </form>

            {Places.length === 0 ? (
                <p>Note places yet</p>
            ) : (
                Places.map((place) => (
                    <div key={place.id}>
                        <h3>{place.Name}</h3>
                        <p>{place.Type}</p>
                        <p>{place.Address}</p>
                    </div>
                ) )
            )}
        </div>  
    );  
};

export default PlaceApp;
