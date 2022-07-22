import React, { useEffect, useState } from 'react';
// import { ref, set } from "firebase/database";
// import { db } from "../firebase";
// import { ethers } from 'ethers'
import { create as ipfsHttpClient } from 'ipfs-http-client'
// import Web3Modal from 'web3modal'
import styled from 'styled-components';
// import toast from 'react-hot-toast';
// import {
    // marketplaceAddress,
    // PolygonNFTMarketplaceAddress
    // MarketplacePolygonAddress
  // } from '../config'
// import NFTMarketplace from '../artifacts/NFTMarketplace.json'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
// import {  ServicesH1, ServicesIcon, ServicesH2 } from '../components/Services/ServicesElements';
// import { CardYellow } from '../components/Card';
// import { NetworkIcons } from '../components/icons'
// import polygon from '../images/polygon-matic-logo.png'
// import avalanche from '../images/avalanche-avax-logo.png'
// import playIcon from '../images/playIcon.jpeg'
// import eth from '../images/eth-black.png'
// import {  SelectionIcon2,  SmallButton, PrimaryThinButton, MintTextArea, ChainIcon, MintInput } from '../components/Buttons';
// import { CoverBg, CoverBtnWrapper,
// } from '../components/CoverSection/CoverElements'
// import AudioInput from '../components/AudioInput'
// let api_url = "https://api.coindesk.com/v1/bpi/currentprice.json";
// import Polygonmarketplace from '../artifacts/Polygonmarketplace.json'

// import test from '../assets/images/output-images/1.png'

// import metadata from '../output/metadata/1.json'
// import { lazy } from 'react';





export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const ServicesContainer = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #24252d ;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const Card = styled.div`
  background: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 700px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;



  @media screen and (max-width: 400px) {
    width: 400px;
  }
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const CardContent = styled.div`
  // background: #fff;
  // height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  // width: '100%' !important;
`

const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const CoverContainer = styled.div`
background: #24252d;
display: flex;
justify-content: center;
align-items: center;
padding: 30px 30px;

height: 3800px;
@media screen and (max-width: 768px) {
  height: 6000px;
  // width: 470px;
}
@media screen and (max-width: 400px) {
  height: 6000px;
  width: 400px;
}
position: relative;
z-index: 1;

:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
 
  z-index: 2;
}
`;

const CoverContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  top: 200px;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width:450px) {
    top: 0px;
    max-width: 400px;
  }
`;

export const InfoContainer = styled.div`

  background: '#f9f9f9';

  margin-bottom: 350px;
  @media screen and (max-width: 450px) {
 
    max-width: 302px;
    margin-top: 0px;
    margin-bottom: 200px;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 600px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  @media screen and (max-width: 450px) {
    max-width: 300px;
    margin-top: 0px;
  }
`;

export const InfoRow = styled.div`
  display: grid;
  margin: auto 0;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  }
`;


export default function MintResume () {


  const [music, setMusic] = useState()
  const [avaxP, setAvaxP] = useState(14)
  const [bnbP, setBnbP] = useState(200)
  const [polygonP, setPolygonP] = useState(0.367852)
  const [ethP, setEthP] = useState(1029)
 

  useEffect(async () => {

    const bnb = 'https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd'
    const avax = 'https://api.coingecko.com/api/v3/simple/price?ids=avalanche-2&vs_currencies=usd'
    const polygon = 'https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd'
    const eth = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'

    const _avaxP = await axios.get(avax)
    console.log('---_avaxP.data', _avaxP.data)
    setAvaxP(_avaxP.data['avalanche-2'].usd)
    const _bnbP = await axios.get(bnb)

    setBnbP(_bnbP.data.binancecoin.usd)
    const _polygonP = await axios.get(polygon)
    setPolygonP(_polygonP.data['matic-network'].usd)
    const _ethP = await axios.get(eth)
    setEthP(_ethP.data.ethereum.usd)
    console.log('---_ethP.data', _ethP.data)
    console.log('---_ava_polygonPxP.data', _polygonP.data)

    // console.log('---prices', price.data)
    // const avxUsd = avaxP * formInput
  }, [])
  
    const [mintType, setMintType] = useState('art')
    const navigate = useNavigate()
    const [fileUrl, setFileUrl] = useState(null)
    const [audioFile, setAudioFile] = useState('')
    const [avatar, setAvatar] = useState(null)

  const [hiddenFile, setHiddentFile] = useState()




    const [createFor, setCreateFor] = useState('individual')
    const [utilityType, setUtilityType] = useState('content')
   
    const [metadataIpfsUrl, setMetadataIpfsUrl] = useState()
    const [formInput, updateFormInput] = useState({ 
      price: '', name: '', description: '', chain: 'avalanche',
      createdBy: '',
      tags: '',
      socialMedia: '',
      hiddenLink: '',
      others: ''
    })
  
    async function onUploadImageToIPFS(e, { music, isAvar, isHiddenFile, isAudioFile }) {
      const file = e.target.files[0]
      console.log('---file', file)
      try {
        const added = await client.add(
          file,
          {
            progress: (prog) => console.log(`received: ${prog}`)
          }
        )
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
          console.log('--isAudioFile', isAudioFile, 'url', url)

          // if (mintType == 'audio') {
          //   setAudioFile(url)
          // }
        if (music) {
          setMusic(url)
        } 
        
        else  if (isAudioFile) {
          setAudioFile(url)
        }
        
        else if (isAvar) {
          setAvatar(url)
        } else if (isHiddenFile) {
          setHiddentFile(hiddenFile)
        }
         else
        {
          setFileUrl(url)
        }
        

      } catch (error) {
        console.log('Error uploading file: ', error)
      }  
    }
  
    async function uploadMetadataToIPFS() {

      const { name, description, createdBy, price, chain, socialMedia, hiddenLink, others, tags} = formInput
      if (!name || !description || !price || !fileUrl || !createdBy) return
      /* first, upload to IPFS */
      const data = JSON.stringify({
        name, 
        description,
        createdBy,
         image: fileUrl || avatar, 
         chain,
        socialMedia, 
        tags,
        hiddenLink, 
        avatar, 
        price,
        usdPrice: Number(price) * Number(avaxP), 
        createFor,
        utilityType,
        others,
        audioFile,
        audioUrl: mintType === 'audio'? fileUrl:  hiddenLink,
        music,
      })
      try {
        const added = await client.add(data)
        const url = `https://ipfs.infura.io/ipfs/${added.path}`
        /* after file is uploaded to IPFS, return the URL to use it in the transaction */

        setMetadataIpfsUrl(url)
        return url
      } catch (error) {
        console.log('Error uploading file: ', error)
      }  
    }
  
    // const saveToDB = async ({
    //   formInput,
    //   url,
    //   image,
    //   // signer,
    //   marketplaceAddress,
    //   // listingPrice,
    //   // musicFileUrl,
    //   // tags,
    // }) => {
    //   // const nftId = uuidv4()
    //   // console.log( '===formInput', formInput, 'listingPrice', listingPrice, 'signer', signer)
    //   const { name, description, price, chain, socialMedia, tags, hiddenLink, artistName, createdBy } = formInput

    //   const id = createdBy.trim() + '-' + name.trim();
    //  await set(ref(db, "NFTs/" + `${createdBy}-${name}`), {
    //     name,
    //     description,
    //     createdBy,
    //     price,
    //     // chain,
    //     image,
    //     tags,
    //     // musicFileUrl,
    //     marketplaceAddress,
    //     socialMedia,
    //     // listingPrice,
    //     // signer,
    //     // musicFileUrl,
    //     // artistName,
     
    //     url
    //   });

    // }

    // async function listNFTForSale() {
    //   const url = await uploadMetadataToIPFS()
    //   const web3Modal = new Web3Modal()
    //   const connection = await web3Modal.connect()
    //   const provider = new ethers.providers.Web3Provider(connection)
    //   const signer = provider.getSigner()
    //   /* next, create the item */
    //   const price = ethers.utils.parseUnits(formInput.price, 'ether')
    //   let contract = new ethers.Contract(
    //     marketplaceAddress, 
    //     // PolygonNFTMarketplaceAddress,
    //     NFTMarketplace.abi, signer
    //   )

    //   let listingPrice = await contract.getListingPrice()

    //   listingPrice = listingPrice.toString()
    //   let transaction = await contract.createToken(url, price, { value: listingPrice })
    //   // let transaction = await contract.createToken(url, price, '0x0000000000000000000000000000000000001010', 10, { value: listingPrice })
    //   await transaction.wait()

      
    //   toast("Item successfully listed for sale 🎉 ")
    //   await saveToDB({
    //     formInput,
    //     image: fileUrl,
    //     url,
    //     metadataUrl: url,
    //     signer,
    //     marketplaceAddress
    //     // PolygonNFTMarketplaceAddress,
    //     // listingPrice,
    //     // musicFileUrl,
    //   })
    //   navigate('/')
    // }

    // async function createMarket() {
    //   const { name, description, price } = formInput
    //   if (!name || !description || !price || !fileUrl) return
    //   /* first, upload to IPFS */
    //   const data = JSON.stringify({
    //     name, description, image: fileUrl
    //   })
    //   try {
    //     const added = await client.add(data)
    //     const url = `https://ipfs.infura.io/ipfs/${added.path}`
    //     /* after file is uploaded to IPFS, pass the URL to save it on Polygon */
    //     createSale(url)
    //   } catch (error) {
    //     console.log('Error uploading file: ', error)
    //   }  
    // }


  // async function createSale(url) {
  //   const web3Modal = new Web3Modal()
  //   const connection = await web3Modal.connect()
  //   const provider = new ethers.providers.Web3Provider(connection)    
  //   const signer = provider.getSigner()
    
  //   /* next, create the item */
  //   let contract = new ethers.Contract(nftaddress, NFT.abi, signer)
  //   let transaction = await contract.createToken(url)
  //   let tx = await transaction.wait()
  //   let event = tx.events[0]
  //   let value = event.args[2]
  //   let tokenId = value.toNumber()

  //   const price = ethers.utils.parseUnits(formInput.price, 'ether')
  
  //   /* then list the item for sale on the marketplace */
  //   contract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
  //   let listingPrice = await contract.getListingPrice()
  //   listingPrice = listingPrice.toString()

  //   transaction = await contract.createMarketItem(nftaddress, tokenId, price, { value: listingPrice })
  //   await transaction.wait()
  //   // router.push('/')
  // }

    const fileInput = React.createRef();

    // useEffect(() => {
    //   const rand = Math.floor(Math.random()*2071)
      
    //   import(`../assets/images/output-images/${rand}.png`).then(yy => {
    //     // this.setState({url: image})
    //     console.log('yy', yy.default)
    //     setImage(yy.default)
    //   })
    //   import(`../output/metadata/${rand}.json`).then(d => {
    //     // this.setState({url: image})
    //     console.log('yykddddk', d)
    //     setMetaData(d)
    //     // setImage(yy.default)
    //   })
    // }, [])

    if (window.analytics) {
      let position
       const watchID = navigator.geolocation.watchPosition((position) => {
         // doSomething(position.coords.latitude, position.coords.longitude);
         position = position
     
       });
     
     // params: event, properties
       window.analytics.track('Mint Art Page visted', {
         userAgent: window.navigator.userAgent,
         url: window.location.href,
         geolocation: position,
         watchID,
       })
     }
    
    //  const image_ = require('../assets/images/output-images/1.png')
    //  console.log('===image_', image_.default)

    //  const ImgComponent = lazy(() => import('../assets/images/output-images/1.png'));
   
    //  const imagesrc = require('../assets/images/output-images/' + rand + '.png');
    //  console.log('===imagesrc', imagesrc)
    //  import('../assets/images/output-images/' + rand + '.png').then(image => console.log(image));

  const ChainIcon = styled.img`
  height: 20px;
  width: 20px;
  margin: 10px;
  // padding: 8px;
  // border: 1px solid silver;
  border-radius: 10px;
`;


  return (
      <InfoContainer  style={{}}>
        <InfoWrapper>
         
                <Card> 
                    <CardContent>
                        {/* <h1 style={{color: '#000'}}>CREATE YOUR NFT WORK</h1> */}
                            <StyledDiv>
                                {/* <h1 style={{fontSize: '1.5rem'}}>Free Mint</h1>
                                {/* <img src={loadImage("../output/images/123.png")} alt="" /> */}
               
                                <div>
                                <input
                                  style={{
                                      background: '#FAE6E6',
                                      color: '#423939',
                                      width: '80%'
                                  }}
                                  value={formInput.name}
                                  onChange={(e) =>
                                    updateFormInput({
                                        ...formInput,
                                        name: e.target.value,
                                    })
                                  }
                                  placeholder={`Name your NFT`}
                                  type="text"
                                
                                  id="name"
                                />
                                </div>
                            </StyledDiv>

                            <StyledDiv  >
    
                       </StyledDiv>
                            <StyledDiv >
    

    
                                {
                                    mintType !== 'audio' && fileUrl && (
                                        <img className="rounded mt-4" width="350" style={{marginBottom: '30px'}} src={fileUrl} />
                                    )
                                    }
                                {/* 
                                  <video autoPlay loop muted>
                                      <source src={'https://www.bensound.com/bensound-music/bensound-buddy.mp3'} type="video/mp4"/>
                                  </video> */}
                                
                                  {/* <img src={playIcon}/>
                                
                                
                                <audio controls autoplay>
                                
                                <source src="https://www.bensound.com/bensound-music/bensound-buddy.mp3" type="audio/mpeg" />
                                    Your browser does not support the audio element.
                                </audio> */}
                                
                         
                                <div>
                                    <h3>Upload Files</h3>
                                    <div className={`${fileUrl ? '' : 'drop_box'}`}>
                                    <header>
                                        {/* <h4>Select File here</h4> */}
                                    </header>
                                    {/* <p>Files Supported: PDF, TEXT, DOC , DOCX</p> */}
                                    <input 
                                        ref={fileInput}
                                        type="file" 
                                        hidden 
                                        // accept=".doc,.docx,.pdf" 
                                        id="fileID"  
                                        value={formInput.file}
                                        // onChange={onUploadImageToIPFS}

                                        onChange={(e) => onUploadImageToIPFS(e, {
                                          music: false,
                                          isAvar: false,
                                          
                                        })}

                                        
                                        />
                                    <button 
                                
                                        onClick={() => fileInput.current.click()} >
                                            
                                            {`${fileUrl ? 'Change File' : 'Cover image for your NFT'}`}
                                    </button>
                                  </div>
                                
                                </div>


                
                                    
                                
                    
                              </StyledDiv>
              
                  
                              <StyledDiv  >
                              <label>CAPTION</label>
                              <div >
                              <texterea
                                style={{
                                  background: '#FAE6E6',
                                  color: '#423939',
                                  width: '80%'
                              }}
                              
                                  value={formInput.description}
                                  onChange={(e) =>
                                    updateFormInput({
                                        ...formInput,
                                        description: e.target.value,
                                    })
                                  }
                                  placeholder='Description'
                                  type="text"
                              
                                  id="description"
                                />
                              </div>
                              </StyledDiv>
                              
                                  
                              <div style={{marginBottom: '1rem'}}>
                              <input
                                style={{
                                  background: '#FAE6E6',
                                  color: '#423939',
                                  width: '80%'
                              }}
                              
                                  value={formInput.createdBy}
                                  onChange={(e) =>
                                    updateFormInput({
                                        ...formInput,
                                        createdBy: e.target.value,
                                    })
                                  }
                                  placeholder='Creator Name'
                                  type="text"
                              
                                  id="createdBy"
                                />
                              </div>

                              <div >
                              <input
                                style={{
                                  background: '#FAE6E6',
                                  color: '#423939',
                                  width: '80%'
                              }}
                              
                                  value={formInput.tags}
                                  onChange={(e) =>
                                    updateFormInput({
                                        ...formInput,
                                        tags: e.target.value,
                                    })
                                  }
                                  placeholder='#hashtags'
                                  type="text"
                              
                                  id="tags"
                                />
                              </div>

                              <StyledDiv  >
                              <label></label>
                              <div >
                              <input
                                style={{
                                  background: '#FAE6E6',
                                  color: '#423939',
                                  width: '80%'
                              }}
                              
                                  value={formInput.socialMedia}
                                  onChange={(e) =>
                                    updateFormInput({
                                        ...formInput,
                                        socialMedia: e.target.value,
                                    })
                                  }
                                  placeholder='Social Media Profile'
                                  type="text"
                              
                                  id="socialMedia"
                                />
                              </div>
                              </StyledDiv>
                              <StyledDiv >
    
                        </StyledDiv >



                            <StyledDiv>
                              <label>PRICE</label>
                              <div>


                                  <input
                                      style={{
                                        background: '#FAE6E6',
                                        color: '#423939',
                                        width: '25%'
                                    }}
                                    value={formInput.price}
                                    onChange={(e) =>
                                      updateFormInput({
                                          ...formInput,
                                          price: e.target.value,
                                      })
                                    }
                                    placeholder='Price'
                                    type="number"
                                
                                    id="price"
                                  />
                                

                                        {/* <ChainIcon
                                          src={avalanche} 
                                          // style={{background: `${formInput.chain === 'avalanche' ? '#FAE6E6': 'none'}` }}
                                      ></ChainIcon> */}

                                      
                                 

                              </div>
                               
                            </StyledDiv>

                            <StyledDiv>
                              <label>PRICE</label>
                              <div>
                                <>
                                
                                </>
                                
                  <div style={{color: 'black'}}>
                        {Number(formInput.price) * Number(avaxP)}  $
                  </div>

<div style={{color: 'black'}}>
   
            <span style={{color: 'black'}}>{ Number(formInput.price) * Number(avaxP) / Number(polygonP) }</span> 
            
            {/* <ChainIcon src={polygon} /> */}


</div>


<div style={{color: 'black'}}>
   
       
            <span style={{color: 'black'}}>{ Number(formInput.price) * Number(avaxP) / Number(ethP) }</span> 
            {/* <ChainIcon src={eth} /> */}
</div>



<div style={{color: 'black', fontSize: '20px', marginTop: '1rem' }}>
          

          
</div>
           
  
                <div style={{margin: '10px 0px', fontSize: '20px', color: '#a9a9a9'}}>
                Current Token Price in USD 
                </div>

                    {/* <SelectionIcon2
                      
                      
                        style={{
                          background: '#FBE3E2'
                        }}
                    >
                      
                      <span style={{
                        color: '#423939'
                      }}>
                        <ChainIcon src={avalanche} /><span style={{color: 'black'}}>${Number(avaxP)}</span>
                        </span>
                      </SelectionIcon2> */}


                      {/* <SelectionIcon2
                      
                      
                            style={{
                              background: '#FBE3E2'
                            }}
                        >
                    
                      <span style={{
                        color: '#423939'
                      }}>
                           <ChainIcon src={polygon} /><span style={{color: 'black'}}>${Number(polygonP)}</span>
                        </span>
                      </SelectionIcon2> */}

                      {/* <SelectionIcon2
                            style={{
                              background: '#FBE3E2'
                            }}
                        >
                    
                      <span style={{
                        color: '#423939'
                      }}>
                                   <ChainIcon src={eth} /><span style={{color: 'black'}}>${Number(ethP)}</span>
                        </span>
                      </SelectionIcon2> */}


                      </div>


                                 


                               
                            </StyledDiv>


                              <div style={{margin: '20px'}}>
                          

                          <StyledDiv  >
                        
                              <div >
                                <texterea
                                  style={{
                                    background: '#FAE6E6',
                                    color: '#423939',
                                    width: '80%'
                                }}

                                    value={formInput.others}
                                    onChange={(e) =>
                                      updateFormInput({
                                          ...formInput,
                                          others: e.target.value,
                                      })
                                    }
                                    placeholder='Tell us more!'
                                    type="text"
                          
                                    id="others"
                                  />
                              </div>
                            </StyledDiv>
                                  <button 
                                    style={{
                                      width: '200px'
                                    }}
                                  
                                    onClick={() => {}}
                                  >
                                    Direct List for Sell
                                  </button>
                          

                              </div>
                      
                        </CardContent>
                

                      </Card>
         
              </InfoWrapper>
          </InfoContainer>
  

  );
};





