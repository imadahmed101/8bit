function Games() {


const products = [
  {
    id: 1,
    name: 'Pac Manz',
    href: '/pacmanz',
    description: 'Pacman but the roles are reversed.',
    imageSrc: 'https://images.unsplash.com/photo-1562229125-6d6075419a22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFjbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Snakez',
    href: '/snakez',
    description: 'Snake game with a twist.',
    imageSrc: 'https://images.unsplash.com/photo-1585095595205-e68428a9e205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhcnRvb24lMjBzbmFrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Brickz',
    href: '/brickz',
    description: 'Brick breaker clone but added upgrades.',
    imageSrc: 'https://images.unsplash.com/photo-1460602692976-8eab38c11f9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnJpY2slMjBicmVha2VyJTIwZ2FtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Marioz',
    href: '/marioz',
    description: 'Platforming game with upgradeable weapons.',
    imageSrc: 'https://images.unsplash.com/photo-1612404730960-5c71577fca11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyaW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Flappy Birdz',
    href: 'flappybirdz',
    description: 'Flappy Bird clone with changing physics.',
    imageSrc: 'https://images.unsplash.com/photo-1572402230267-f3e267c1e5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJpcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  // More products...
]

  return (

      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-lg font-medium text-indigo-600">{product.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            </a>
          ))}
        </div>
      </div>

  )
}

export default Games;