function MyButton() {
  return (
    <button>I'm a button</button>
  );
}


function AboutPage() {
  return (
    <>
    <h1>About</h1>
    <p>Hello there.<br />How do you do?</p>
    </>
  )
}

<img className="avata" />

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <MyButton />
      <AboutPage />
    </div>
  );
}

