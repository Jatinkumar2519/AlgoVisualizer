import React from "react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-light text-center p-5" style={{borderRadius: '5px'}}>
        <h1 className="display-4 fw-bold">Learn Competitive Programming</h1>
        <p className="lead">
          Explore interactive algorithm visualizations, curated problem sets,
          and in-depth documentation — all in one place.
        </p>
        <div className="mt-4">
          <a href="/Documentation" className="btn btn-primary btn-lg mx-2">
            Start Learning
          </a>
          <a href="/problemList" className="btn btn-success btn-lg mx-2">
            Solve Problems
          </a>
          <a href="/Visualizers" className="btn btn-warning btn-lg mx-2">
            Visualize Algorithms
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container my-5">
        <div className="row text-center">
          <div className="col-md-3">
            <h4>📚 Algorithm Library</h4>
            <p>Clear, concise documentation with practical examples.</p>
          </div>
          <div className="col-md-3">
            <h4>🎯 Practice Problems</h4>
            <p>Hand-picked challenges by difficulty & topic.</p>
          </div>
          <div className="col-md-3">
            <h4>🎥 Interactive Visualizations</h4>
            <p>See algorithms come alive in animations.</p>
          </div>
          <div className="col-md-3">
            <h4>🏆 CP Focused</h4>
            <p>Tailored for contests and performance optimization.</p>
          </div>
        </div>
      </section>
      {/* Visualization Preview */}
      <section className="p-5 text-center" style={{ background: '#fdf2f8' }}>
        <h2>See Algorithms in Action</h2>
                <hr/>
        <p className="text-muted">
          Watch how Merge Sort works step by step — and try other visualizations!
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Merge_sort_animation2.gif"
          alt="Merge Sort Visualization"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px"}}
        />
        <div className="mt-3">
          <a href="/Visualizers" className="btn btn-primary">
            🎥 Try More Visualizations →
          </a>
        </div>
      </section>

      {/* Getting Started Steps */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Getting Started</h2>
        <hr/>
        <div className="row text-center">
          <div className="col-md-4" >
            <div className="card p-3" style={{ background: '#fdf2f8', border: '0px'}}>
              <h4>1.📝 Choose a Topic</h4>
              <p>Select from Graphs, DP, Strings, and more.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3" style={{ background: '#fdf2f8', border: '0px'}}>
              <h4>2.📚  Learn & Visualize</h4>
              <p>Read explanations and watch animations.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card p-3" style={{ background: '#fdf2f8', border: '0px'}}>
              <h4>3.👨‍💻 Practice Problems</h4>
              <p>Test your skills with related coding challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Problems */}
      <section className="p-5" style={{ background: '#fdf2f8', border: '0px'}}>
        <h2 className="text-center mb-4">Latest Problems</h2>
        <hr/>
        <div className="container" >
          <div className="list-group">
            <a href="/problemList/Graph" className="list-group-item list-group-item-action" style={{ background: '#f7e3eeff', border: '0px',marginTop: '2px'}}>
              Dijkstra’s Algorithm → Solve
            </a>
            <a href="/problemList/Backtracking" className="list-group-item list-group-item-action" style={{ background: '#f7e3eeff', border: '0px',marginTop: '2px'}}>
              N-Queens Problem → Backtracking
            </a>
            <a href="/problemList/Segment_Tree" className="list-group-item list-group-item-action" style={{ background: '#f7e3eeff', border: '0px',marginTop: '2px'}}>
              Segment Tree → Interactive Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-dark text-light text-center p-4">
        <h4>Ready to level up your CP skills?</h4>
        <a href="/problemList" className="btn btn-primary mt-3">
          Start Solving Now
        </a>
      </footer>
    </div>
  );
}
