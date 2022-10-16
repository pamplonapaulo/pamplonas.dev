import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import * as S from './styles'

import { useMenu, useCanvas } from 'contexts'

const Nav = () => {
  const { menu, setMenu } = useMenu()
  const router = useRouter()
  const [current, setCurrent] = useState('')
  const [subpage, setSubpage] = useState('')
  const [downloadName, setDownloadName] = useState<string | null>('unamed.png')
  let downloadBtn = useRef<HTMLAnchorElement | null>(null)
  const { canvas, setCanvas } = useCanvas()

  const pages = [
    '',
    'about',
    'portfolio',
    'stack',
    'resume',
    'articles',
    'generative',
    'contact',
  ]

  const handleClick = (path: string) => {
    if (current !== path) {
      router.push({ pathname: path }, path)
      setMenu(false)
    } else if (current === path && subpage === 'arts') {
      router.push({ pathname: path }, path)
      setMenu(false)
    }
  }

  useEffect(() => {
    const pageGroup = router.pathname.match('/.+/')

    if (pageGroup === null) {
      setCurrent(router.pathname)
      setSubpage('')
      if (canvas) setCanvas(null)
    } else {
      setSubpage(pageGroup![0].slice(1, -1))

      if (pageGroup![0].slice(1, -1) === 'arts') {
        const expression = /[^\/]+$/
        const regex = new RegExp(expression)
        const artName = pageGroup!['input']!.match(regex)

        setDownloadName(artName![0] + '.png')
      }
    }
  }, [router.pathname, setCanvas, canvas, setDownloadName])

  const handleArtDownload = () => {
    if (downloadBtn && canvas) {
      const img = canvas.toDataURL('image/png')
      const downloadImg = img.replace(
        /^data:image\/[^;]/,
        'data:application/octet-stream'
      )
      downloadBtn.current!.href = downloadImg
    }
  }

  return (
    <S.Nav isVisible={menu}>
      {canvas && (
        <S.Item
          ref={downloadBtn}
          downloadBtn={true}
          download={downloadName}
          isSelected={false}
          isClickable={true}
          href="#"
          onClick={handleArtDownload}
        >
          download static art
        </S.Item>
      )}
      {pages.map((p: string) => (
        <S.Item
          key={p}
          isSelected={current === '/' + p}
          isClickable={current !== '/' + p || subpage === 'arts'}
          onClick={() => handleClick('/' + p)}
        >
          {p === '' ? 'home' : p}
        </S.Item>
      ))}
    </S.Nav>
  )
}

export default Nav
