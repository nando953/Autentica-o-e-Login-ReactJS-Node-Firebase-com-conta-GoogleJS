import styled from 'styled-components';

export const AreaHeader = styled.div`
  height: 200px;
  background-image: linear-gradient(to right, #FE5d37, #370a99);
  color: #fff;

  .container{
      padding: 20px 20px;
      display: flex;
      align-items: center;
  }

     .logo{
         flex: 1; 
         
         img{
             width: 130px;
         }

     }

       nav{
           display: flex;

           ul{
               display: flex;
           }

                li{
                    list-style: none;
                    margin-left: 20px;

                    a{
                        text-decorate: none;
                        color: #fff;

                        &:hover{
                            color: #F5BB00;
                        }
                    }
                }
            .avatar{
                display: flex;
                align-items: center;

                img{
                    width: 45px;
                    border-radius: 20px;
                    margin-left: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }

                label{
                   font-size: 14px;
                   cursor: pointer;
                   color: #ccc; 
                }

                @media screen and (max-width: 600px){
                    label{
                        display: none;
                    }
                }
            }
       }


`; //acento grave