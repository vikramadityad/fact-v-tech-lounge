const confirm = () => {
    return (

      <section className="confirmSubscription"
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center', 
            flexWrap: 'wrap',
            margin: '100px',
        }}
        >

        <div style={{fontSize: '24px', textAlign: 'center'}}>Hey there <span style={{fontWeight: 'bold'}}>VIP</span>, Thanks for subscribing!
        <div>
            <center><img src="src/images/vip-man.jpg" width="300px" height="auto"></img></center>
        </div>
        <em>We can't wait to see you at all of our AMAZING events!</em></div>
       
        
      </section>
      
    );
  };
  
  export default confirm;