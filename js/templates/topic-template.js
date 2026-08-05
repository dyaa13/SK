'use strict';

/*
Copy this file when a new topic is added.
Each small knowledge point has its own generator slot.
Add the script tag before js/app.js in index.html.
*/

TOPIC_CONFIGS.topicId = {
  title: 'Topic Name',
  pageTitle: 'Knowledge Practice — Topic Name',
  knowledgeMapTitle: 'Topic Name Practice Structure',
  intro: 'Explain how the small knowledge points are grouped.',
  levels: [
    ['foundation', 'Foundation'],
    ['core', 'Core'],
    ['challenge', 'Challenge']
  ],
  groups: [
    {
      id: 'exampleGroup',
      practiceNumber: 1,
      label: 'Example Practice Point',
      description: 'Describe what students practise here.',
      knowledgePoints: [
        { id: 'smallPointOne', number: 1, label: 'Small Knowledge Point' }
      ]
    }
  ],
  teacherNote: 'Teacher note for this topic.'
};

TOPIC_BANKS.topicId = {
  exampleGroup: {
    smallPointOne() {
      return makeQuestion({
        subtopic: 'Small Knowledge Point',
        text: 'Example question',
        answer: 1,
        displayAnswer: '1',
        hint: 'Example hint.'
      });
    }
  }
};
