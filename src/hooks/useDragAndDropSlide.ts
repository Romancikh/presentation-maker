import { Slide as TSlide } from "../types/types.ts";
import { useContext } from "react";
import { PresentationContext } from "../contexts/presentation.tsx";
import { Dispatch, MutableRefObject, SetStateAction, useContext, useEffect, useRef } from "react";


const useDragAndDropSlide =
  (
    elementRef: React.MutableRefObject<HTMLDivElement | null>,
    slide: TSlide,
  ) => {
    const { presentation } = useContext(PresentationContext);

    const isDraggingThis = useRef<boolean>(false)
    const coords = useRef<{ startMouse: number; lastMouse: number }>({
      startMouse: 0,
      lastMouse: 0,
    })

    useEffect(() => {
      if (elementRef.current && slide.selected) {
        if (isDraggingSlides) {
          isDraggingThis.current = true
          coords.current.startMouse = coords.current.lastMouse
        } else if (isDraggingThis.current) {
          isDraggingThis.current = false
          elementRef.current.style.transform = ``
          elementRef.current.style.position = ``
          elementRef.current.style.zIndex = ``
        }
      } else {
        isDraggingThis.current = false
      }
    }, [isDraggingSlides])

    useEffect(() => {
      const element = elementRef.current
      if (!element) throw new Error('Slide is undefined!')

      const area = element.parentElement
      if (!area)
        throw new Error("Wrong slide structure! Slide doesn't have a parent-area")

      const onMouseDown = () => {
        if (slide.selected) {
          setDragSlides(true)
          setDragSlidesOrigin(slide)
        }

        setDragSlidesDelta(0)
      }

      const onMouseMove = (e: MouseEvent) => {
        coords.current.lastMouse = e.clientY

        if (!isDraggingThis.current) return

        const deltaHeight = e.clientY - coords.current.startMouse
        element.style.transform = `translateY(${deltaHeight}px)`
        element.style.position = `relative`
        element.style.zIndex = `1`

        setDragSlidesDelta(deltaHeight)
      }

      element.addEventListener('mousedown', onMouseDown)
      area.addEventListener('mousemove', onMouseMove)

      return () => {
        element.removeEventListener('mousedown', onMouseDown)
        area.removeEventListener('mousemove', onMouseMove)
      }
    }, [slide])
  }
}
export default useDragAndDropSlide();
