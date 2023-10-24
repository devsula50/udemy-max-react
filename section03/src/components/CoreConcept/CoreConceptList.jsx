import {CORE_CONCEPTS} from "../../data";
import {CoreConcept} from "./CoreConcept";
import {Section} from "../Section/Section";

export const CoreConceptList = () => {
  return (
    <Section id={"core-concepts"} title={'Core Concepts'}>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <CoreConcept key={concept.title} {...concept} />
        ))}
      </ul>
    </Section>
  )
}