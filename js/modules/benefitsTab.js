const beneftisTab = () => {
    const benefitsTabs = document.querySelector('.benefits-tabs');
    const captions = benefitsTabs.querySelectorAll('.captions__caption');
    const tabs = benefitsTabs.querySelectorAll('.benefits-tabs__main-area');

    benefitsTabs.addEventListener('click', (e) => {
        if (e.target.classList.contains('captions__caption')){
            // console.log(e.target.getAttribute('tabNumber'));

            tabs.forEach(tab => {
                tab.style.display = 'none';
            });

            captions.forEach(caption => {
                caption.classList.remove('captions__caption_active');
            });

            e.target.classList.add('captions__caption_active')

            let neededTab = benefitsTabs.querySelector('.tab' + e.target.getAttribute('tabNumber'));

            neededTab.style.display = 'block';
        }
    });
}

export default beneftisTab;