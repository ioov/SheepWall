import '@/style/reception/footer.scss'


const Footer = () => {
  // Must add passHref to Link
  return (
    <footer className='footer'>
      <div>
        <div>
        部分资源来自网络，如有侵权请联系
        <code>
        <a href="mailto:ki@sooi.top"  rel="noopener noreferrer">
          ki@sooi.top</a>
        </code>

        处理
        </div>

        <div>&copy; 眠羊20223</div>
      </div>

    </footer>

  )
}

export default Footer;