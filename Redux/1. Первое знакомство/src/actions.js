//action creator
export const inc = () => {
    return {
      type: 'INC'
    }
}

// то же самое
export const dec = () => ({type: 'DEC'})

export const rnd = () => ({type: 'RND', payload: Math.floor(Math.random() * 10)})