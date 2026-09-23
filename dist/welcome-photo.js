// A direct entry into the course; the rest of the introduction remains below.
const illustratedHome=home;
home=function(){
 const returning=!!lastLesson||digitalCount()>0;
 const hero=`<section class="photo-welcome"><img class="welcome-photo" src="assets/service-daylight.webp?v=two-dishes-21" alt="" fetchpriority="high" decoding="async"><div class="photo-welcome-copy"><h1>${txt(T('Die Kunst der Gastlichkeit.','The art of service.','L’art du service.'))}</h1><p>${txt(T('Für den Einstieg in den Service oder zum Auffrischen: Gerichte vorstellen, Getränke empfehlen und aufmerksam für deine Gäste da sein.','Whether you’re new to restaurant service or brushing up on the basics, explore how to introduce dishes, recommend drinks and look after your guests.','Pour débuter en salle ou revoir les bases : présenter les plats, conseiller les boissons et prendre soin des clients.'))}</p><a class="primary welcome-start" href="#${returning?'journey':'lesson/welcome'}">${txt(returning?T('Weiterlernen','Continue learning','Continuer'):FLOW.start)}${arrow}</a></div></section>`;
 return illustratedHome().replace(/<section class="opening">[\s\S]*?<\/section>/,hero).replace('<section class="invitation">',`<section class="home-ink-interlude" aria-label="${txt(T('Eine Tischzeichnung von SALONFORMAT','A table illustration by SALONFORMAT','Une table dessinée par SALONFORMAT'))}">${art('table-ink')}</section><section class="invitation">`);
};
const RESET_LABEL=T('Von vorne beginnen','Start again','Recommencer');
const journeyBeforeReset=journey;
journey=function(){return journeyBeforeReset()+`<section class="restart-section"><button class="text-button" id="restart-open">${txt(RESET_LABEL)}</button><dialog id="restart-dialog" aria-labelledby="restart-title" aria-describedby="restart-description"><h2 id="restart-title">${txt(T('Noch einmal von vorne?','Start from the beginning?','Reprendre depuis le début ?'))}</h2><p id="restart-description">${txt(T('Deine Antworten und dein Lernfortschritt werden zurückgesetzt. Deine persönlichen Notizen bleiben erhalten. Danach startest du mit der ersten Einheit.','Your answers and learning progress will be reset. Your personal notes will be kept. You will then start the first lesson.','Vos réponses et votre progression seront effacées. Vos notes personnelles seront conservées. Vous reprendrez ensuite la première séquence.'))}</p><div class="actions"><button class="text-button" id="restart-cancel" autofocus>${txt(T('Abbrechen','Cancel','Annuler'))}</button><button class="primary" id="restart-confirm">${txt(RESET_LABEL)}${arrow}</button></div></dialog></section>`;};
function restartLearning(){
 completed=[];selectedAnswers={};lessonStages={};lastLesson=null;practiceDone={};
 for(const [key,value] of Object.entries({completed:[], 'answers-v2':{},answers:{},'lesson-stages':{},lastLesson:null,'taskChecks':{},'practice-v2':{},'practice-v3':{}}))write(key,value);
 for(const l of LESSONS)write('lab-open-'+l.id,false);
 sceneAnswers={};currentScene=0;pairDish=0;pairVariant=0;pairDrink=0;pairMode='wine';pairRevealed=false;aromaIndex=0;labContext=null;
 location.hash='lesson/welcome';
}
const bindBeforeRestart=bind;
bind=function(){bindBeforeRestart();const dialog=$('#restart-dialog');$('#restart-open')?.addEventListener('click',()=>dialog.showModal());$('#restart-cancel')?.addEventListener('click',()=>dialog.close());$('#restart-confirm')?.addEventListener('click',()=>{dialog.close();restartLearning();});};
render(false);
