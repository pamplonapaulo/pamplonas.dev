import Container from 'components/container'
// import Canvas from 'components/canvas'
import * as S from './styles'

const ResumeTemplate = () => {
  return (
    <>
      <Container
        alignItems={'baseline'}
        justify={'start'}
        direction={'column'}
        maxWidth={'1480px'}
        // bgColor={'red'}
      >
        <S.Title>resume</S.Title>

        <S.Section>
          <S.Title>Experience</S.Title>

          <S.Headline>Support Engineer</S.Headline>
          <S.Headline>NewPage Inc</S.Headline>
          <S.Headline>Jun 2022 - Present · 4 mos</S.Headline>
          <S.Descr>
            I belong to a 10-people squad team working to support marketing
            teams from a top leading global pharmaceutical brand. Our websites
            are built over a custom platform based on Grapes.js and Drupal. My
            first experience inside a working environment totally remote and
            totally international.
          </S.Descr>

          <S.Headline>Full Stack Web Developer</S.Headline>
          <S.Headline>pamplonas.dev</S.Headline>
          <S.Headline>Sep 2021 - Jun 2022 · 10 mos</S.Headline>
          <S.Descr>
            Several months fully dedicated to my first e-commerce project, coded
            from scratch after kicking off a Next.JS course by William Justen
            (React Avançado - Advanced React), which is being watched only to
            help real issues on my project. The project is the most complex job
            I ever had. It uses Strapi headless CMS to handle my backend needs.
            Project is done but client is not ready to relase it.
            <S.Anchor target="blank" href="https://gorilla.vercel.app/">
              gorilla.vercel.app
            </S.Anchor>
            <S.Anchor
              target="blank"
              href="https://github.com/pamplonapaulo/gorilla-nextjs/"
            >
              github.com/pamplonapaulo/gorilla-nextjs
            </S.Anchor>
            <S.Anchor
              target="blank"
              href="https://github.com/pamplonapaulo/gorillapack-backend/"
            >
              github.com/pamplonapaulo/gorillapack-backend
            </S.Anchor>
          </S.Descr>

          <S.Headline>Frontend Web Developer</S.Headline>
          <S.Headline>pamplonas.dev</S.Headline>
          <S.Headline>Dec 2019 · 1 mos</S.Headline>
          <S.Descr>
            First international client. Also my fastest project ever made. It’s
            a super simple front-end project built over a Bootstrap template
            that I already had experience. No challenges faced during this job
            at all.
            <S.Anchor
              target="blank"
              href="https://www.automatedgymsolutions.com/"
            >
              automatedgymsolutions.com
            </S.Anchor>
            <S.Anchor
              target="blank"
              href="https://github.com/pamplonapaulo/automatedgymsolutions.com/"
            >
              github.com/pamplonapaulo/automatedgymsolutions.com
            </S.Anchor>
          </S.Descr>

          <S.Headline>Full Stack Web Developer</S.Headline>
          <S.Headline>pamplonas.dev</S.Headline>
          <S.Headline>Oct 2019 - Nov 2019 · 2 mos</S.Headline>
          <S.Descr>
            So far, this project was my biggest use of PHP and mySQL and my very
            first Content Management System (coded from scratch). Also first use
            of Facebook SDK, which forced me to recode a huge part of the
            front-end side. Design created 100% by me, after research of
            painting’s websites.
            <S.Anchor target="blank" href="https://heloisa.art/">
              heloisa.art/
            </S.Anchor>
            <S.Anchor
              target="blank"
              href="https://github.com/pamplonapaulo/heloisa.art/"
            >
              github.com/pamplonapaulo/heloisa.art
            </S.Anchor>
          </S.Descr>

          <S.Headline>Frontend Web Developer</S.Headline>
          <S.Headline>Vollup</S.Headline>
          <S.Headline>Mar 2018 - May 2019 · 3 mos</S.Headline>
          <S.Descr>
            Working with multiple clients at the same time either in the
            front-end side (which means mostly customizations with vanilla
            Javascript and CSS at platforms like Vtex e- commerce and WordPress)
            or in the back-end side (dealing with PHP and SQL database).
            <S.Anchor target="blank" href="https://wolffcafe.com.br/">
              wolffcafe.com.br
            </S.Anchor>
            <S.Anchor target="blank" href="https://marimariamakeup.com/">
              marimariamakeup.com
            </S.Anchor>
            <S.Anchor target="blank" href="https://brindes.com.br/">
              brindes.com.br
            </S.Anchor>
          </S.Descr>

          <S.Headline>Frontend Web Developer</S.Headline>
          <S.Headline>pamplonas.dev</S.Headline>
          <S.Headline>Oct 2018 - Jan 2019 · 4 mos</S.Headline>
          <S.Descr>
            First direct and remote client: www.ginger.com.br. Originally hired
            to just build the animated background, which was coded in SVG -
            converted with Adobe Illustrator, loaded in a JSON file, inserted in
            the DOM with vanilla JS and finally animated via CSS (ps: visible
            only in screens up to 1200px). But at one point the client decided
            to let the entire project under my responsibility. The website has a
            Bootstrap based template and a bit of PHP handling the
            multi-language feature.
            <S.Anchor target="blank" href="https://ginger.com.br/">
              ginger.com.br
            </S.Anchor>
            <S.Anchor
              target="blank"
              href="https://github.com/pamplonapaulo/jobs/ginger/"
            >
              github.com/pamplonapaulo/jobs/ginger
            </S.Anchor>
          </S.Descr>

          <S.Headline>Frontend Web Developer</S.Headline>
          <S.Headline>Vollup</S.Headline>
          <S.Headline>Nov 2017 · 1 mos</S.Headline>
          <S.Descr>
            Working for 1 month in a team on projects for companies like Besni,
            MeclTec, iCelex iRecarga, Quality Consulta, and Sush1. Activities
            include web-pages written with HTML, CSS, Bootstrap, and some jQuery
            scripts. Also, a few emails marketing (Photoshop + HTML) and
            web-pages built via Wordpress.
          </S.Descr>
        </S.Section>

        <S.Section>
          <S.Title>Education</S.Title>

          <S.Headline>Frontend Web Development Certificate Program</S.Headline>
          <S.Headline>San Diego Continuing Education</S.Headline>
          <S.Headline>Sep 2016 - Jul 2017 · 720 hours</S.Headline>
          <S.Headline>San Diego, California</S.Headline>
          <S.Descr>
            Attended 20 hours per week for 36 weeks (2 semesters).
            <S.Anchor
              target="blank"
              href="http://www.sdce.edu/job-training/computers/front-end-web-developer/"
            >
              sdce.edu/job-training/computers/front-end-web-developer
            </S.Anchor>
          </S.Descr>

          <S.Headline>Branding</S.Headline>
          <S.Headline>Getulio Vargas Foundation (FGV)</S.Headline>
          <S.Headline>Feb 2014 - Jul 2014 · 5 months</S.Headline>
          <S.Headline>São Paulo, Brazil</S.Headline>
          <S.Descr>
            Building and management of brands.
            <S.Anchor
              target="blank"
              href="https://educacao-executiva.fgv.br/sp/sao-paulo/"
            >
              educacao-executiva.fgv.br/sp/sao-paulo
            </S.Anchor>
          </S.Descr>

          <S.Headline>Branding</S.Headline>
          <S.Headline>Getulio Vargas Foundation (FGV)</S.Headline>
          <S.Headline>Feb 2014 - Jul 2014 · 60 hours</S.Headline>
          <S.Headline>São Paulo, Brazil</S.Headline>
          <S.Descr>
            Building and management of brands.
            <S.Anchor
              target="blank"
              href="https://educacao-executiva.fgv.br/sp/sao-paulo/"
            >
              educacao-executiva.fgv.br/sp/sao-paulo
            </S.Anchor>
          </S.Descr>

          <S.Headline>Digital Media</S.Headline>
          <S.Headline>Getulio Vargas Foundation (FGV)</S.Headline>
          <S.Headline>Feb 2013 - Jul 2013 · 60 hours</S.Headline>
          <S.Headline>São Paulo, Brazil</S.Headline>
          <S.Descr>
            Planning and management in Digital Media.
            <S.Anchor
              target="blank"
              href="https://educacao-executiva.fgv.br/sp/sao-paulo/"
            >
              educacao-executiva.fgv.br/sp/sao-paulo
            </S.Anchor>
          </S.Descr>

          <S.Headline>Economics for Journalists</S.Headline>
          <S.Headline>Getulio Vargas Foundation (FGV)</S.Headline>
          <S.Headline>Jan 2004 - Sep 2004 · 108 hours</S.Headline>
          <S.Headline>Rio de Janeiro, Brazil</S.Headline>
          <S.Descr>
            Economics for Journalists.
            <S.Anchor
              target="blank"
              href="https://educacao-executiva.fgv.br/rj/rio-de-janeiro/"
            >
              educacao-executiva.fgv.br/rj/rio-de-janeiro
            </S.Anchor>
          </S.Descr>

          <S.Headline>
            Social Communication&apos;s Bachelor&apos;s Degree, B.A.
          </S.Headline>
          <S.Headline>Helio Alonso Integrated College (Facha).</S.Headline>
          <S.Headline>Aug 1998 - Sep 2004</S.Headline>
          <S.Headline>Rio de Janeiro, Brazil</S.Headline>
          {/* <S.Descr>
            Half of the college emphasized in Journalism
            <S.Anchor
              target="blank"
              href="https://educacao-executiva.fgv.br/rj/rio-de-janeiro/"
            >
              https://educacao-executiva.fgv.br/rj/rio-de-janeiro/
            </S.Anchor>
          </S.Descr> */}
          <S.Descr>Half of the college emphasized in Journalism.</S.Descr>
        </S.Section>

        <S.Section>
          <S.Title>Certifications</S.Title>

          <S.Headline>Advanced React</S.Headline>
          <S.Headline>Udemy | Willian Justen</S.Headline>
          <S.Headline>Started on 2021 · 88.5 hours</S.Headline>
          <S.Descr>
            Advanced React with Next.js, Strapi headless CMS, GraphQL, and more.
            <S.Anchor
              target="blank"
              href="https://www.udemy.com/course/react-avancado/"
            >
              Course&apos;s webpage
            </S.Anchor>
          </S.Descr>

          <S.Headline>React.js Ninja / Full React.js</S.Headline>
          <S.Headline>Udemy | Fernando Daciuk</S.Headline>
          <S.Headline>Jul 2020 · 91.5 hours</S.Headline>
          <S.Descr>
            Credential ID UC-99f14090-5bc6-41fb-b5bf-00dbec5f9530
            <S.Anchor
              target="blank"
              href="https://www.udemy.com/certificate/UC-99f14090-5bc6-41fb-b5bf-00dbec5f9530/"
            >
              Show certificate
            </S.Anchor>
          </S.Descr>

          <S.Headline>PHP</S.Headline>
          <S.Headline>Softblue | André Milani</S.Headline>
          <S.Headline>Jul 2019 · 50 hours</S.Headline>
          <S.Descr>
            Credential ID 3047973C91C4
            <S.Anchor
              target="blank"
              href="https://www.linkedin.com/feed/update/urn:li:activity:6554438624186822656/"
            >
              Show certificate
            </S.Anchor>
          </S.Descr>

          <S.Headline>Javascript Ninja</S.Headline>
          <S.Headline>Udemy | Fernando Daciuk</S.Headline>
          <S.Headline>Jul 2018 · 42 hours</S.Headline>
          <S.Descr>
            Credential ID UC-0KSGLU2L
            <S.Anchor
              target="blank"
              href="https://www.udemy.com/certificate/UC-0KSGLU2L/"
            >
              Show certificate
            </S.Anchor>
          </S.Descr>
        </S.Section>
      </Container>
    </>
  )
}

export default ResumeTemplate
