export default function Page2({ hide2 }) {
  return (
    <main>
      {hide2 ? (
        <p> </p>
      ) : (
        <>
          {/* https://media.snl.no/media/178025/standard_compressed_Grumpy_Cat.jpg */}
          <img
            alt='Grumpy-cat meme "I had fun once. It was awful"'
            className="icon"
            src="/Cat.jpg"
          />
          <article>
            <h1>An oldie but a goodie</h1>
            <p> Old school meme, men er veldig fantastisk</p>
            <p>
              The best thing in the universe is a cardboard box ask to be pet
              then attack owners hand. Meow all night eat the fat cats food run
              around the house at 4 in the morning but sit as close as possible
              to warm fire without sitting on cold floor i'm so hungry i'm so
              hungry but ew not for that . Claw drapes. Sleep on my human's head
              eat prawns daintily with a claw then lick paws clean wash down
              prawns with a lap of carnation milk then retire to the warmest
              spot on the couch to claw at the fabric before taking a catnap but
              behind the couch, yet try to jump onto window and fall while
              scratching at wall mrow. Jump five feet high and sideways when a
              shadow moves ask for petting. Swat at dog kitty scratches couch
              bad kitty reward the chosen human with a slow blink eat plants,
              meow, and throw up because i ate plants destroy couch as revenge
              yet see owner, run in terror. Morning beauty routine of licking
              self allways wanting food or litter kitter kitty litty little
              kitten big roar roar feed me so kitty run to human with blood on
              mouth from frenzied attack on poor innocent mouse, don't i look
              cute? so pee on walls it smells like breakfast. Hide at bottom of
              staircase to trip human knock dish off table head butt cant eat
              out of my own dish bite plants.
            </p>
          </article>
        </>
      )}
    </main>
  )
}
