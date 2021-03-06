import React from 'react'

const about = ({ active }) => {
    return (
        <div>
            <div>
                <h1>About</h1>
                <p>Nörd er félag tölvunarfræði- og hugbúnaðarverkfræðinema í Háskóla Íslands.</p>
                <p>Nörd var stofnað árið 1987 og er eitt stærsta og virkasta nemendafélag í HÍ.</p>
                <p>Meðlimir Nörd eru {active.count} talsins.</p>
            </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch('https://nordredo-backend.herokuapp.com/users/active')
    const active = await res.json()
    const cookie = ctx.req.headers.cookie;
    const resUser = await fetch('https://nordredo-backend.herokuapp.com/users/me', {
    headers: { 
        cookie: cookie,
    }
    })
    const user = await resUser.json()
    return {
      props: {
        active,
        user,
      },
    }
  }
export default about
