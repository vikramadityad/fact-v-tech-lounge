import "../styles/Vip.css";

const vipMembership = () => {
    return (

      <section className="vipBox"
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: 'rgb(226, 223, 223)',
            marginLeft: '160px',
            marginRight: '160px',
            padding: '20px',
            border: 'solid',
            borderColor: 'black',
            gap: '40px',
        }}
        >

        <div>
            <p style={{fontSize:'80px', fontWeight: 'bold', color: 'rgb(22, 22, 87)'}}>fact-V.I.P.</p>
            <p style={{fontSize:'60px', fontWeight: 'bold', color: 'rgb(22, 22, 87)'}}>Membership</p>
            <center><img src="src/images/vip.jpg" width="350px" height="auto"></img></center>
        </div>

        <div>
            <hr></hr>
            <p style={{fontSize: '16px'}}><em>Introducing</em> our <span style={{fontWeight:'bold'}}>★Monthly VIP Membership Subscription★</span> to the ultimate <em>tech-themed bar & 
                lounge</em> experience! With this <span style={{fontWeight:'bold'}}>exclusive membership</span>,
                 you'll unlock a world of <span style={{fontWeight:'bold'}}>perks and privileges</span> that <em>redefine your social life</em>. </p>
                
                <p style={{fontSize: '16px'}}>Gain <span style={{fontWeight:'bold'}}>unlimited monthly access</span> to a calendar brimming with <em>cutting-edge tech events</em>, 
                all included for free. From <span style={{fontWeight:'bold'}}>insightful tech talks to exhilarating virtual reality 
                nights</span>, you'll be at the <em>forefront of the latest innovations</em>, mingling with 
                like-minded tech enthusiasts. Elevate your evenings with <span style={{fontWeight:'bold'}}>priority seating, 
                exclusive discounts, and early access</span> to new and <em>exciting experiences</em>. </p>
                
                <p style={{fontSize: '16px'}}>Our VIP members are the <span style={{fontWeight:'bold'}}>tech-savvy elite</span>, and we invite you to join this <em>exclusive 
                community</em> where your <span style={{fontWeight:'bold'}}>passion for technology meets the finest in entertainment</span> and 
                networking. <span style={{fontWeight:'bold'}}>SUBSCRIBE TODAY</span> and upgrade your nights out with the <em>future of 
                entertainment</em>.</p>

                 <button class='subscribe'><a href="https://buy.stripe.com/test_dR6g2I4A2cKcaWs3cd">Subscribe</a></button>
                 <hr></hr>
                 </div>
        
      </section>
      
    );
  };
  
  export default vipMembership;