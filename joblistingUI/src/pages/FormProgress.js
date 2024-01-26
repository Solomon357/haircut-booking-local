import useFormContext from "../customhooks/useFormContext";


const FormProgress = () => {
    const { page, title } = useFormContext();
  
    const percentage = 100 / Object.keys(title).length
  
    const progress = ((page + 1) * percentage).toFixed(2)
    
  //   const steps = Object.keys(title).map((step, i) => {
  //     return <div key = {i} className="barmarker">Step {i+1}</div>
  //   })
    const content = (
      <section className="progress-container">
          {/* <div className="barmarker-container">
              {steps}
          </div> */}
          <p>Basic Progress Bar</p>
          <progress className="progress" max={"100"} value={progress}></progress>
      </section>
    )

    return content
  }
  
  export default FormProgress;