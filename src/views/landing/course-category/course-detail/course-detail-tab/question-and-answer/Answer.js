import React, {useEffect, useState} from 'react';
import {Avatar, Container, makeStyles} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {courseAnswersApi} from '../../../../../../services/CourseServices';
import {useSnackbar} from 'notistack';
import {Notify, setProps} from '../../../../../../shared/components/notification/Notification';
import {avatarTruncate} from '../../../../../../shared/functions/TextTruncate';
import Moment from 'react-moment';

const useStyles = makeStyles(theme => ({
  people: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 10,

  },
  lernerName: {
    fontSize: 18,
    fontWeight: 700,
    paddingLeft: 10
  },
  questionTitle: {
    fontSize: 15,
    fontWeight: 600,
    paddingLeft: 10
  },
  questionDetail: {
    fontSize: 15,
    paddingLeft: 10
  },
  reply: {
    display: 'flex',
    marginTop: 20
  }
}));

export const Answer = ({question, course, unit, handleAction}) => {
  const classes = useStyles();
  const snackbar = useSnackbar();
  const [answers, setAnswers] = useState([]);
  const [answerData, setAnswerData] = useState('');

  useEffect(() => {
    setProps(snackbar);
    fetchAnswers();
  }, []);

  const fetchAnswers = () => {
    courseAnswersApi('get', course?.id, unit?.id, question?.id).then(response => {
      setAnswers(response.answers);
    }).catch(err => Notify(err, 'error'));
  };

  const handleAnswer = () => {
    if (answerData !== '' || answerData !== undefined) {
      const answerValue = {answer: answerData};
      courseAnswersApi('post', course?.id, unit?.id, question?.id, {answer: {...answerValue}}).then(response => {
        fetchAnswers();
        setAnswerData('');
        Notify('Answer added successfully', 'success');
      }).catch(err => Notify(err, 'error'));
    }
  };

  return (
    <div>
      <Container>
        <Button variant="outlined" color="primary" style={{marginTop: 20, marginBottom: 20}}
                onClick={handleAction}>Back to Questions</Button>
        <div className={classes.people}>
          <Avatar style={{width: 60, height: 60}}>
            <span className={classes.avaterCharacter}>
              {avatarTruncate(question?.user?.profile_attributes?.first_name, 1)}
            </span>
          </Avatar>
          <div className={classes.inlineFlex}>
            <Typography className={classes.lernerName}>
              {question?.user?.profile_attributes?.first_name || 'Edu'} {question?.user?.profile_attributes?.last_name || 'User'}
            </Typography>
            <Typography className={classes.questionTitle}>
              {question?.question}
            </Typography>
            <Typography className={classes.questionDetail}>
              {question?.description}
            </Typography>
            {answers.length > 0 && answers?.map(answer => (
              <div className={classes.reply} key={answer?.id}>
                <Avatar style={{width: 60, height: 60}}>
                  <span className={classes.avaterCharacter}>
                    {avatarTruncate(answer?.user?.profile_attributes?.first_name, 1)}
                  </span>
                </Avatar>
                <div style={{marginLeft: 20}}>
                  <Typography style={{color: 'gray'}}>
                    {answer?.user?.profile_attributes?.first_name || 'Edu'} {answer?.user?.profile_attributes?.last_name || 'User'}
                  </Typography>
                  <Typography style={{color: 'gray', fontSize: 13}}>
                    <Moment fromNow>{answer?.created_at}</Moment>
                  </Typography>
                  <Typography style={{color: '#797777', fontSize: 14, marginTop: 10, marginBottom: 20}}>
                    {answer?.answer}
                  </Typography>
                </div>
              </div>))}
          </div>
        </div>
        <TextField label="Write your Reply" placeholder="Write your Reply" value={answerData}
                   onChange={(e) => setAnswerData(e?.target?.value)}
                   variant="outlined" fullWidth multiline={true} rows={3}/>
        <div>
          <Button className="pull-left mt-2" color="primary" variant="contained" onClick={() => handleAnswer()}>
            Add an Answer</Button>
        </div>
      </Container>
    </div>
  );
};
