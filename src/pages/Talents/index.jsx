import { useNavigate } from 'react-router-dom';
import { AiFillHeart } from "react-icons/ai";

export function Talents() {
    const navigate = useNavigate()
    const talents = [
        {}
    ]
  
    {(talents).map((asset, index) => {

 


      return (
        <div className="home-card" >
          <div className="bids-card"
            style={{
              height: '700px',
              background: 'linear-gradient(84.06deg, rgb(224, 234, 200, 0.3) -28.62%, rgb(224, 234, 200, 0.3) 36.39%, rgb(224, 234, 200, 0.3)',
              borderRadius: '1rem',
              boxShadow: '0px 15px 20px #d7d7d7' }}
            >
              
            <div style={{display: 'flex'}}> 
              <p style={{color: '#a9a9a9'}}> 
              {'ERC-721'}&nbsp;&nbsp; &nbsp;&nbsp; 
              {asset.name && asset.name.slice(0,7)} &nbsp;&nbsp; 
              {asset.price} 
              {/* <img  style={{width: '1rem', height: '1rem', marginLeft: '1rem'}} src={avalanche} /> */}
              </p>
                    

              </div>
            <div>
              <div className="bids-card-top" 
        


        >

          <img src={asset.image} alt="" 
            onMouseEnter ={() => {
            }}
        />
         
                <p style={{color: '#e99b8c'}} 
                  onClick={() => {
                    const token_address = '0x50c56D4289C6F001a3ba362AF8f35c153f7fa98a'
                    const token_id = asset.name
                    const createdBy = asset.createdBy;
                    // const token_uri = asset.config.url;

                window.analytics.track('NFT card', 'click', { token_address, token_id})
             
                navigate(`/${asset.createdBy}/future/${asset.tokenId}`, { state: { asset: {
                  ...asset,
                  createdBy,
                    token_address,
               
                    token_id,
                    amount: '1',
                    contract_type: 'ERC721',
                    name: asset.name,
                    symbol: 'METT',
                    token_uri: asset.url,
                    metadata: JSON.stringify({
                        description: asset.description || '',
                        external_url: asset.socialMedia || 'futurelab.world',
                        image: asset.image,
                        synced_at: `2022-0${Math.round(Math.random() * 6) + 1}-20T13:33:41.128Z`
                    })
                }}})
              }}

                    > 
                  {Math.round(Math.random() * 10000)} / {'10000'}  &nbsp;&nbsp; &nbsp;&nbsp;
                  &nbsp;&nbsp; 
                  {asset.price}  &nbsp;&nbsp;  <AiFillHeart /> {Math.floor(Math.random() * 1000)}
                </p>
               
      
        </div>
      </div>

</div>
</div>
)
})}


}