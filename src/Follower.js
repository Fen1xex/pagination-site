const Follower = ({ login, id, avatar_url: avatar, html_url: url }) => {
  return (
    <article className='follower'>
      <img src={avatar} alt={login} />
      <h3>{login}</h3>

      <a href={url}>more info</a>
    </article>
  )
}

export default Follower
