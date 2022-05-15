export default function Page3({ hide3 }) {
  return (
    <main>
      {hide3 ? (
        <p> </p>
      ) : (
        <>
          {/* https://pbs.twimg.com/media/EUXOgVHUUAERTe6.jpg */}
          <img
            alt='Meme saying "Programmers looking at programming memes" and someone saying "Ah, humor based on my pain. Ah, ha ha '
            className="icon"
            src="/code.jpg"
          />
          <article>
            <h1>Me working on this</h1>
            <p>Vell dette er vel livet til utviklere</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mi
              nunc, accumsan vitae nibh nec, commodo aliquet nunc. Proin ut
              imperdiet odio. Sed tristique purus lacus, eu cursus quam laoreet
              vel. Aenean luctus non sem a malesuada. Maecenas blandit risus eu
              ipsum varius, in volutpat risus pharetra. Fusce luctus diam sit
              amet odio finibus vestibulum. Suspendisse vestibulum, erat ac
              suscipit porttitor, ipsum purus semper elit, vitae eleifend nisi
              massa in augue. Pellentesque placerat sapien vel auctor iaculis.
              Fusce nec turpis sit amet nisl finibus fermentum. Donec sagittis
              feugiat venenatis.
            </p>
            <p>
              Duis porta feugiat quam eu hendrerit. Nunc mollis lorem ac dolor
              maximus, eget sodales diam laoreet. Aliquam non sollicitudin leo,
              et interdum magna. Sed ut dui a ligula ornare dictum ac non felis.
              Pellentesque sagittis elit eu lacus convallis, ut euismod velit
              iaculis. Etiam sodales faucibus interdum. Proin dignissim lacus
              orci, eget sodales ligula commodo quis. Integer condimentum mattis
              leo vitae consectetur.
            </p>
          </article>
        </>
      )}
    </main>
  )
}
