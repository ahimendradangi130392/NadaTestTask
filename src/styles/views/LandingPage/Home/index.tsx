import styled from 'styled-components'


export const Maincontainer = styled.div`
  width: 100%;
  position:relative;
  padding-bottom:50px;
  .name-items{
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .dtails-show-list{
    height: 290px;
    overflow:auto;
    @media only screen and (max-width: 600px) {
      height: auto;
   
    }
    ::-webkit-scrollbar {
      width: 4px;
      height:2px;
      background:#e7e7e7;
     
    }
    ::-webkit-scrollbar-thumb {
      background: #888; 
    }
    
  }
  &:after{
    width: 100%;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top:0;
    z-index:-1;
    min-height: 360px;
    background: #6a69693b;
  }
  .candidate-img{
    margin-right:15px;
    width:45px;
    height:50px;
    border-radius:50%;
    overflow: hidden;
img{
  border-radius:50%;
}
  }
  .showrating{
    p{
      color:#000;
      padding-top:10px;
    }
    .showrating-items{
    @media only screen and (max-width: 600px) {
      display:none;
    }
  }
  }
  .headsTitle{
    max-width:430px;
  }  
  &:before{
    width: 100%;
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    bottom:0;
    z-index:-1;
    height: 50px;
    background: #bfbfbf2e;
  }
  .dtails-items-on{
    display:flex;
    @media only screen and (max-width: 600px) {
      display:block;
    }
  }
  .dtailsitems-bg-color{
    @media only screen and (max-width: 600px) {
      background: #bfbfbf2e;
    } 
  }
  .Showinfos-itmes{
    display: flex;
    flex-wrap:wrap;
    
    .Showinfos{
      width:100%;
      @media only screen and (max-width: 600px) {
        width:49%;
      }
     
    }
  }
  .dtails-show{
    padding:30px 20px;
    margin-top:15px;
    .Showinfos{
      max-width: 90%;
      display: flex;
      place-Items:center;
     min-height:59px;
      padding-bottom: 10px;
      border-bottom: 1px solid;
      margin-bottom: 15px;
      p{
        flex-wrap:wrap;
        display:flex;
        span{
          padding:0 5px;
        }
      }
      @media only screen and (max-width: 600px) {
        display: block;
        border-bottom: 0px solid;
      }
      h4{
        min-width: 240px;
        @media only screen and (max-width: 600px) {
          min-width: 160px;
          margin-bottom:0;
        }
        font-size: 18px;
      }
      .dtails-items{
        place-items:center;
        display:flex;
      }
      .candidate-img{
        svg{
          width: 47px;
          height: 52px;
          fill:#ddd;
        }
      }
    }
  }
 
  @media only screen and (max-width: 600px) {
  
     &:after{
       background:transparent
     }
   }
`
export const Tvshow = styled.div`


max-width:1300px;
margin:0px auto;
.headTitle{
padding:30px 20px;
@media only screen and (max-width: 600px) {
  background: #bfbfbf2e;
}
}
.dtailsitems-add{
 padding:10px 20px 30px;
 .dtails-data{
  overflow: auto;
  height:141px;
@media only screen and (max-width: 600px) {
  height:auto;
}
  ::-webkit-scrollbar {
    width: 2px;
    height:2px;
    background:#e7e7e7;
  }
 }

}
h3{
  font-size:25px;
}
p{
  color:#a9a7a7;
  margin-bottom:0px;
  font-size:16px;
}
h2{
  padding-top:30px
  margin-top:20px

}
.imgItems{
  padding:0 !important;
  img{
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
@media only screen and (max-width: 600px) {
  padding:0px 0 20px;
}
  padding:20px 0;
}
.imgBox{
  display:flex;
  place-items:center;
  height: 250px;
  width: 100%;
  max-width:250px;
  overflow:hidden;
  border-radius:5px;
  background: #ddd;
@media only screen and (max-width: 600px) {
  margin:0 auto;

}
  svg{
    fill:#eee;
    margin:0 auto;
  }
 
}
`
export const TvshowContent = styled.div`
`



export const LeftWrapper = styled.div`
  display: flex;
  max-width: 45%;
  width: 100%;
`

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 372px;
  width: 100%;
  gap: 54px;
`

export const RightWrapper = styled.div`
  max-width: 55%;
  width: 100%;
`
export const Logo = styled.img`
  width: 109px;
`
export const HomeDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .ant-input {
    max-width: 372px;
    width: 100%;
    border: 1px solid #dadbf1;
    border-radius: 24px;
    padding: 10px 24px;
    outline: none;
    ::placeholder {
      font-family: 'PoppinsMedium';
      font-size: 16px;
      line-height: 24px;
      color: #999999;
    }
  }
`
export const HeadingText = styled.div`
  font-family: 'PoppinsBold';
  font-size: 36px;
  line-height: 54px;
  padding: 10px 0;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .ant-form-item {
    margin-bottom: 0;
  }
`
export const ForgotText = styled.div`
  text-align: right;
  font-family: 'PoppinsMedium';
  font-size: 14px;
  line-height: 124%;
  letter-spacing: 0.005em;
  color: #a8a8df;
  cursor: pointer;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100vh;
`
export const Error = styled.div`
  color: #ff4040;
  font-family: 'PoppinsSemiBold';
  font-size: 14px;
  line-height: 24px;
`
export const InputWrapper = styled.div``
