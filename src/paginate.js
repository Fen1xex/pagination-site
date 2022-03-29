const paginate = (followers) => {
  const followersPerPage = 9
  const amountPages = Math.ceil(followers.length / followersPerPage)

  const newFollowers = Array.from({ length: amountPages }, (_, index) => {
    const start = followersPerPage * index
    return followers.slice(start, followersPerPage + start)
  })
  return newFollowers
}

export default paginate
